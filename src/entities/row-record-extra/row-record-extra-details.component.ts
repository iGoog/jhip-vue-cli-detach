import { Component, Vue, Inject } from 'vue-property-decorator';

import { IRowRecordExtra } from '@/shared/model/row-record-extra.model';
import RowRecordExtraService from './row-record-extra.service';

@Component
export default class RowRecordExtraDetails extends Vue {
  @Inject('rowRecordExtraService') private rowRecordExtraService: () => RowRecordExtraService;
  public rowRecordExtra: IRowRecordExtra = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.rowRecordExtraId) {
        vm.retrieveRowRecordExtra(to.params.rowRecordExtraId);
      }
    });
  }

  public retrieveRowRecordExtra(rowRecordExtraId) {
    this.rowRecordExtraService()
      .find(rowRecordExtraId)
      .then(res => {
        this.rowRecordExtra = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
