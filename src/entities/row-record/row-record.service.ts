import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IRowRecord } from '@/shared/model/row-record.model';

const baseApiUrl = 'api/row-records';

export default class RowRecordService {
  public find(id: number): Promise<IRowRecord> {
    return new Promise<IRowRecord>(resolve => {
      axios.get(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public retrieve(paginationQuery?: any): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(baseApiUrl + `?${buildPaginationQueryOpts(paginationQuery)}`).then(function(res) {
        resolve(res);
      });
    });
  }

  public delete(id: number): Promise<any> {
    return new Promise<any>(resolve => {
      axios.delete(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res);
      });
    });
  }

  public create(entity: IRowRecord): Promise<IRowRecord> {
    return new Promise<IRowRecord>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IRowRecord): Promise<IRowRecord> {
    return new Promise<IRowRecord>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
