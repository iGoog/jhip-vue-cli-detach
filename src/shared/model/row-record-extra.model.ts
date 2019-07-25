import { IRowRecord } from '@/shared/model/row-record.model';

export interface IRowRecordExtra {
  id?: number;
  detail?: string;
  cash?: number;
  due?: Date;
  rowr?: IRowRecord;
}

export class RowRecordExtra implements IRowRecordExtra {
  constructor(public id?: number, public detail?: string, public cash?: number, public due?: Date, public rowr?: IRowRecord) {}
}
