import { Inject, Injectable } from '@nestjs/common';
import { Beach } from '../models/Beach';
import { BeachRepository } from '../repositories';

@Injectable()
export class FindAllBeachsService {
  constructor(
    @Inject(BeachRepository) private beachRepository: BeachRepository,
  ) {}

  public async execute(): Promise<Beach[]> {
    return this.beachRepository.findAll();
  }
}
