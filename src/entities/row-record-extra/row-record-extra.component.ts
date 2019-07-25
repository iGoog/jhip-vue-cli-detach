import { Component, Inject, Vue } from 'vue-property-decorator';
import { IRowRecordExtra } from '@/shared/model/row-record-extra.model';
import AlertService from '@/shared/alert/alert.service';

import RowRecordExtraService from './row-record-extra.service';

@Component
export default class RowRecordExtra extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('rowRecordExtraService') private rowRecordExtraService: () => RowRecordExtraService;
  private removeId: number = null;
  public rowRecordExtras: IRowRecordExtra[] = [];

  public isFetching = false;
  public dismissCountDown: number = this.$store.getters.dismissCountDown;
  public dismissSecs: number = this.$store.getters.dismissSecs;
  public alertType: string = this.$store.getters.alertType;
  public alertMessage: any = this.$store.getters.alertMessage;

  public getAlertFromStore() {
    this.dismissCountDown = this.$store.getters.dismissCountDown;
    this.dismissSecs = this.$store.getters.dismissSecs;
    this.alertType = this.$store.getters.alertType;
    this.alertMessage = this.$store.getters.alertMessage;
  }

  public countDownChanged(dismissCountDown: number) {
    this.alertService().countDownChanged(dismissCountDown);
    this.getAlertFromStore();
  }

  public mounted(): void {
    this.retrieveAllRowRecordExtras();
  }

  public clear(): void {
    this.retrieveAllRowRecordExtras();
  }

  public retrieveAllRowRecordExtras(): void {
    this.isFetching = true;

    this.rowRecordExtraService()
      .retrieve()
      .then(
        res => {
          this.rowRecordExtras = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IRowRecordExtra): void {
    this.removeId = instance.id;
  }

  public removeRowRecordExtra(): void {
    this.rowRecordExtraService()
      .delete(this.removeId)
      .then(() => {
        const message = 'A RowRecordExtra is deleted with identifier ' + this.removeId;
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllRowRecordExtras();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
