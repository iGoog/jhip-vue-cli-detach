import { IRowRecord } from '@/shared/model/row-record.model';

export interface ITopRecord {
  id?: number;
  refNo?: number;
  rows?: IRowRecord[];
}

export class TopRecord implements ITopRecord {
  constructor(public id?: number, public refNo?: number, public rows?: IRowRecord[]) {}
}
