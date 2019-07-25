import axios from 'axios';

import { ITopRecord } from '@/shared/model/top-record.model';

const baseApiUrl = 'api/top-records';

export default class TopRecordService {
  public find(id: number): Promise<ITopRecord> {
    return new Promise<ITopRecord>(resolve => {
      axios.get(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public retrieve(): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(baseApiUrl).then(function(res) {
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

  public create(entity: ITopRecord): Promise<ITopRecord> {
    return new Promise<ITopRecord>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: ITopRecord): Promise<ITopRecord> {
    return new Promise<ITopRecord>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
