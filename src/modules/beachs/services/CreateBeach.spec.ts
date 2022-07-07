import { Test } from '@nestjs/testing';
import { CreateBeach, GeoPosition } from '../interfaces/Beachs.interfaces';
import { BeachRepository, MongoDbBeachRepository } from '../repositories';
import { CreateBeachService } from './CreateBeach.service';

let createBeach: CreateBeachService;

const beachEntity: CreateBeach = {
  name: 'Praia do Rosa - SC',
  position: GeoPosition.S,
  lat: -28.3513,
  lng: -48.8167,
};
describe('Create Beach Service', () => {
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateBeachService,
        {
          provide: MongoDbBeachRepository,
          useFactory: () => {
            return new BeachRepository();
          },
        },
      ],
    }).compile();

    createBeach = module.get(CreateBeachService);
  });
  test('should be create a beach', async () => {
    const createBeachSpy = jest.spyOn(createBeach, 'execute');

    const beach = await createBeach.execute(beachEntity);

    expect(beach).toHaveProperty('name');

    expect(beach.name).toBe(beachEntity.name);

    expect(createBeachSpy).toHaveBeenCalledTimes(1);
  });
});
