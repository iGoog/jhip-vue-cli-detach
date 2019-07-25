import { Component, Inject, Vue } from 'vue-property-decorator';
import { ITopRecord } from '@/shared/model/top-record.model';
import AlertService from '@/shared/alert/alert.service';

import TopRecordService from './top-record.service';

@Component
export default class TopRecord extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('topRecordService') private topRecordService: () => TopRecordService;
  private removeId: number = null;
  public topRecords: ITopRecord[] = [];

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
    this.retrieveAllTopRecords();
  }

  public clear(): void {
    this.retrieveAllTopRecords();
  }

  public retrieveAllTopRecords(): void {
    this.isFetching = true;

    this.topRecordService()
      .retrieve()
      .then(
        res => {
          this.topRecords = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: ITopRecord): void {
    this.removeId = instance.id;
  }

  public removeTopRecord(): void {
    this.topRecordService()
      .delete(this.removeId)
      .then(() => {
        const message = 'A TopRecord is deleted with identifier ' + this.removeId;
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllTopRecords();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
