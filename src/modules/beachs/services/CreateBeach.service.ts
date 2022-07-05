import { Inject, Injectable } from '@nestjs/common';
import { Beach, CreateBeach } from '../models/Beach';
import { BeachRepository } from '../repositories';

@Injectable()
export class CreateBeachService {
  constructor(
    @Inject(BeachRepository) private beachRepository: BeachRepository,
  ) {}

  public async execute(beach: CreateBeach): Promise<Beach> {
    return this.beachRepository.create(beach);
  }
}
