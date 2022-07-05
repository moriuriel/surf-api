import { Inject, Injectable } from '@nestjs/common';
import { IBeachRepository, MongoDbBeachRepository } from '../repositories';
import { Beach } from '../schemas/Beach.schema';

@Injectable()
export class FindAllBeachsService {
  constructor(
    @Inject(MongoDbBeachRepository) private beachRepository: IBeachRepository,
  ) {}

  public async execute(): Promise<Beach[]> {
    return this.beachRepository.findAll();
  }
}
