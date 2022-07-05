import { v4 } from 'uuid';
import { Beach, CreateBeach } from '../interfaces/Beachs.interfaces';

import { IBeachRepository } from './BeachRepository.interface';

export class BeachRepository implements IBeachRepository {
  private beachs: Beach[] = [];

  async create(beach: CreateBeach): Promise<Beach> {
    const newBeach = {
      ...beach,
      _id: v4(),
      created_at: new Date(Date.now()).toISOString(),
      updated_at: new Date(Date.now()).toISOString(),
    };

    this.beachs.push(newBeach);

    return newBeach;
  }

  async findAll(): Promise<Beach[]> {
    return this.beachs;
  }
}
