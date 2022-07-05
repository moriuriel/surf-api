import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBeach } from '../interfaces/Beachs.interfaces';
import { Beach } from '../schemas/Beach.schema';
import { IBeachRepository } from './BeachRepository.interface';

@Injectable()
export class MongoDbBeachRepository implements IBeachRepository {
  constructor(
    @InjectModel(Beach.name)
    private beachRepository: Model<Beach>,
  ) {}

  async create(beach: CreateBeach): Promise<Beach> {
    return this.beachRepository.create(beach);
  }

  async findAll(): Promise<Beach[]> {
    return this.beachRepository.find();
  }
}
