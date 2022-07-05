import { CreateBeach, GeoPosition } from '../models/Beach';
import { BeachRepository } from '../repositories';
import { CreateBeachService } from './CreateBeach.service';

let createBeach: CreateBeachService;
let beachRepository: BeachRepository;

const beachEntity: CreateBeach = {
  name: 'Praia do Rosa - SC',
  position: GeoPosition.S,
  lat: -28.3513,
  lng: -48.8167,
};
describe('Create Beach Service', () => {
  beforeEach(() => {
    beachRepository = new BeachRepository();

    createBeach = new CreateBeachService(beachRepository);
  });
  test('should be create a beach', async () => {
    const createBeachSpy = jest.spyOn(createBeach, 'execute');

    const beach = await createBeach.execute(beachEntity);

    expect(beach).toHaveProperty('name');

    expect(beach.name).toBe(beachEntity.name);

    expect(createBeachSpy).toHaveBeenCalledTimes(1);
  });
});
