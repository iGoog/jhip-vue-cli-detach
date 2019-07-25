import { Component, Vue, Inject } from 'vue-property-decorator';

import { ITopRecord } from '@/shared/model/top-record.model';
import TopRecordService from './top-record.service';

@Component
export default class TopRecordDetails extends Vue {
  @Inject('topRecordService') private topRecordService: () => TopRecordService;
  public topRecord: ITopRecord = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.topRecordId) {
        vm.retrieveTopRecord(to.params.topRecordId);
      }
    });
  }

  public retrieveTopRecord(topRecordId) {
    this.topRecordService()
      .find(topRecordId)
      .then(res => {
        this.topRecord = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
