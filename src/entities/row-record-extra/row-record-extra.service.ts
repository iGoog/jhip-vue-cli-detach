import axios from 'axios';

import { IRowRecordExtra } from '@/shared/model/row-record-extra.model';

const baseApiUrl = 'api/row-record-extras';

export default class RowRecordExtraService {
  public find(id: number): Promise<IRowRecordExtra> {
    return new Promise<IRowRecordExtra>(resolve => {
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

  public create(entity: IRowRecordExtra): Promise<IRowRecordExtra> {
    return new Promise<IRowRecordExtra>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IRowRecordExtra): Promise<IRowRecordExtra> {
    return new Promise<IRowRecordExtra>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
