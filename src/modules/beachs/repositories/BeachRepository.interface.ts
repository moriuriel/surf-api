import { Beach, CreateBeach } from '../models/Beach';

export interface IBeachRepository {
  create(beach: CreateBeach): Promise<Beach>;
  findAll(): Promise<Beach[]>;
}
