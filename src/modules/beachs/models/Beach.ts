import { BaseModel } from 'src/shared/model';

export enum GeoPosition {
  S = 'S',
  E = 'E',
  W = 'W',
  N = 'N',
}

export interface Beach extends BaseModel {
  name: string;
  position: GeoPosition;
  lat: number;
  lng: number;
}

export type CreateBeach = Omit<Beach, '_id' | 'created_at' | 'updated_at'>;
