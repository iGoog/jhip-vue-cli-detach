import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import RowRecordService from '../row-record/row-record.service';
import { IRowRecord } from '@/shared/model/row-record.model';

import AlertService from '@/shared/alert/alert.service';
import { ITopRecord, TopRecord } from '@/shared/model/top-record.model';
import TopRecordService from './top-record.service';

const validations: any = {
  topRecord: {
    refNo: {}
  }
};

@Component({
  validations
})
export default class TopRecordUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('topRecordService') private topRecordService: () => TopRecordService;
  public topRecord: ITopRecord = new TopRecord();

  @Inject('rowRecordService') private rowRecordService: () => RowRecordService;

  public rowRecords: IRowRecord[] = [];
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.topRecordId) {
        vm.retrieveTopRecord(to.params.topRecordId);
      }
      vm.initRelationships();
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.topRecord.id) {
      this.topRecordService()
        .update(this.topRecord)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A TopRecord is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.topRecordService()
        .create(this.topRecord)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A TopRecord is created with identifier ' + param.id;
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveTopRecord(topRecordId): void {
    this.topRecordService()
      .find(topRecordId)
      .then(res => {
        this.topRecord = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.rowRecordService()
      .retrieve()
      .then(res => {
        this.rowRecords = res.data;
      });
  }
}
