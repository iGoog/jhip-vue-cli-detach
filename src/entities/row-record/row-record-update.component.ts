import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { DATE_TIME_LONG_FORMAT, INSTANT_FORMAT, ZONED_DATE_TIME_FORMAT } from '@/shared/date/filters';

import RowRecordExtraService from '../row-record-extra/row-record-extra.service';
import { IRowRecordExtra } from '@/shared/model/row-record-extra.model';

import TopRecordService from '../top-record/top-record.service';
import { ITopRecord } from '@/shared/model/top-record.model';

import AlertService from '@/shared/alert/alert.service';
import { IRowRecord, RowRecord } from '@/shared/model/row-record.model';
import RowRecordService from './row-record.service';

const validations: any = {
  rowRecord: {
    detail: {},
    longDemo: {},
    bigDecimaldemo: {},
    floatDemo: {},
    doubleDemo: {},
    booleanDemo: {},
    localDataDemo: {},
    zonedDateTimeDemo: {},
    durationDemo: {},
    uuidDemo: {},
    blobDemo: {},
    anyBlobDemo: {},
    imageBlobDemo: {},
    textBlobDemo: {},
    instantDemo: {},
    record: {
      required
    }
  }
};

@Component({
  validations
})
export default class RowRecordUpdate extends mixins(JhiDataUtils) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('rowRecordService') private rowRecordService: () => RowRecordService;
  public rowRecord: IRowRecord = new RowRecord();

  @Inject('rowRecordExtraService') private rowRecordExtraService: () => RowRecordExtraService;

  public rowRecordExtras: IRowRecordExtra[] = [];

  @Inject('topRecordService') private topRecordService: () => TopRecordService;

  public topRecords: ITopRecord[] = [];
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.rowRecordId) {
        vm.retrieveRowRecord(to.params.rowRecordId);
      }
      vm.initRelationships();
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.rowRecord.id) {
      this.rowRecordService()
        .update(this.rowRecord)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A RowRecord is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.rowRecordService()
        .create(this.rowRecord)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A RowRecord is created with identifier ' + param.id;
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public convertDateTimeFromServer(date: Date): string {
    if (date) {
      return format(date, DATE_TIME_LONG_FORMAT);
    }
    return null;
  }

  public updateInstantField(field, event) {
    if (event.target.value) {
      this.rowRecord[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.rowRecord[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.rowRecord[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.rowRecord[field] = null;
    }
  }

  public retrieveRowRecord(rowRecordId): void {
    this.rowRecordService()
      .find(rowRecordId)
      .then(res => {
        this.rowRecord = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public clearInputImage(field, fieldContentType, idInput): void {
    if (this.rowRecord && field && fieldContentType) {
      if (this.rowRecord.hasOwnProperty(field)) {
        this.rowRecord[field] = null;
      }
      if (this.rowRecord.hasOwnProperty(fieldContentType)) {
        this.rowRecord[fieldContentType] = null;
      }
      if (idInput) {
        (<any>this).$refs[idInput] = null;
      }
    }
  }

  public initRelationships(): void {
    this.rowRecordExtraService()
      .retrieve()
      .then(res => {
        this.rowRecordExtras = res.data;
      });
    this.topRecordService()
      .retrieve()
      .then(res => {
        this.topRecords = res.data;
      });
  }
}
