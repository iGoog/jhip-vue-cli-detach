import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import RowRecordService from '../row-record/row-record.service';
import { IRowRecord } from '@/shared/model/row-record.model';

import AlertService from '@/shared/alert/alert.service';
import { IRowRecordExtra, RowRecordExtra } from '@/shared/model/row-record-extra.model';
import RowRecordExtraService from './row-record-extra.service';

const validations: any = {
  rowRecordExtra: {
    detail: {},
    cash: {},
    due: {},
    rowr: {
      required
    }
  }
};

@Component({
  validations
})
export default class RowRecordExtraUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('rowRecordExtraService') private rowRecordExtraService: () => RowRecordExtraService;
  public rowRecordExtra: IRowRecordExtra = new RowRecordExtra();

  @Inject('rowRecordService') private rowRecordService: () => RowRecordService;

  public rowRecords: IRowRecord[] = [];
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.rowRecordExtraId) {
        vm.retrieveRowRecordExtra(to.params.rowRecordExtraId);
      }
      vm.initRelationships();
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.rowRecordExtra.id) {
      this.rowRecordExtraService()
        .update(this.rowRecordExtra)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A RowRecordExtra is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.rowRecordExtraService()
        .create(this.rowRecordExtra)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A RowRecordExtra is created with identifier ' + param.id;
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveRowRecordExtra(rowRecordExtraId): void {
    this.rowRecordExtraService()
      .find(rowRecordExtraId)
      .then(res => {
        this.rowRecordExtra = res;
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
