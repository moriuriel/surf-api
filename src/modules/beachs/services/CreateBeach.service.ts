import { Inject, Injectable } from '@nestjs/common';
import { CreateBeach } from '../interfaces/Beachs.interfaces';
import { IBeachRepository, MongoDbBeachRepository } from '../repositories';
import { Beach } from '../schemas/Beach.schema';

@Injectable()
export class CreateBeachService {
  constructor(
    @Inject(MongoDbBeachRepository) private beachRepository: IBeachRepository,
  ) {}

  public async execute(beach: CreateBeach): Promise<Beach> {
    return this.beachRepository.create(beach);
  }
}
