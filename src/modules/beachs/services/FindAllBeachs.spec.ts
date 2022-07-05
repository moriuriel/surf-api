import { CreateBeach, GeoPosition } from '../models/Beach';
import { BeachRepository } from '../repositories';
import { FindAllBeachsService } from './FindAllBeachs.service';

let findAllBeachs: FindAllBeachsService;
let beachRepository: BeachRepository;

const beachEntity: CreateBeach = {
  name: 'Praia do Rosa - SC',
  position: GeoPosition.S,
  lat: -28.3513,
  lng: -48.8167,
};
describe('Create Beach Service', () => {
  beforeEach(async () => {
    beachRepository = new BeachRepository();

    findAllBeachs = new FindAllBeachsService(beachRepository);

    beachRepository.create(beachEntity);
  });
  test('should be create a beach', async () => {
    const findAllBeachsSpy = jest.spyOn(findAllBeachs, 'execute');

    const beachs = await findAllBeachs.execute();

    expect(beachs[0].name).toBe(beachEntity.name);

    expect(findAllBeachsSpy).toHaveBeenCalledTimes(1);
  });
});
