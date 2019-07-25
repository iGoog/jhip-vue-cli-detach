import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { IRowRecord } from '@/shared/model/row-record.model';
import RowRecordService from './row-record.service';

@Component
export default class RowRecordDetails extends mixins(JhiDataUtils) {
  @Inject('rowRecordService') private rowRecordService: () => RowRecordService;
  public rowRecord: IRowRecord = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.rowRecordId) {
        vm.retrieveRowRecord(to.params.rowRecordId);
      }
    });
  }

  public retrieveRowRecord(rowRecordId) {
    this.rowRecordService()
      .find(rowRecordId)
      .then(res => {
        this.rowRecord = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
