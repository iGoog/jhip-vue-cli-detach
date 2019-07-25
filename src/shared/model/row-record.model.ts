import { IRowRecordExtra } from '@/shared/model/row-record-extra.model';
import { ITopRecord } from '@/shared/model/top-record.model';

export interface IRowRecord {
  id?: number;
  detail?: string;
  longDemo?: number;
  bigDecimaldemo?: number;
  floatDemo?: number;
  doubleDemo?: number;
  booleanDemo?: boolean;
  localDataDemo?: Date;
  zonedDateTimeDemo?: Date;
  durationDemo?: number;
  uuidDemo?: string;
  blobDemoContentType?: string;
  blobDemo?: any;
  anyBlobDemoContentType?: string;
  anyBlobDemo?: any;
  imageBlobDemoContentType?: string;
  imageBlobDemo?: any;
  textBlobDemo?: any;
  instantDemo?: Date;
  extra?: IRowRecordExtra;
  record?: ITopRecord;
}

export class RowRecord implements IRowRecord {
  constructor(
    public id?: number,
    public detail?: string,
    public longDemo?: number,
    public bigDecimaldemo?: number,
    public floatDemo?: number,
    public doubleDemo?: number,
    public booleanDemo?: boolean,
    public localDataDemo?: Date,
    public zonedDateTimeDemo?: Date,
    public durationDemo?: number,
    public uuidDemo?: string,
    public blobDemoContentType?: string,
    public blobDemo?: any,
    public anyBlobDemoContentType?: string,
    public anyBlobDemo?: any,
    public imageBlobDemoContentType?: string,
    public imageBlobDemo?: any,
    public textBlobDemo?: any,
    public instantDemo?: Date,
    public extra?: IRowRecordExtra,
    public record?: ITopRecord
  ) {
    this.booleanDemo = this.booleanDemo || false;
  }
}
