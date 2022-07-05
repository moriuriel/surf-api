import { CreateBeach } from '../interfaces/Beachs.interfaces';
import { Beach } from '../schemas/Beach.schema';

export interface IBeachRepository {
  create(beach: CreateBeach): Promise<Beach>;
  findAll(): Promise<Beach[]>;
}
