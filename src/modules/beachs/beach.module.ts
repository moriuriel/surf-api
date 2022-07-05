import { Module } from '@nestjs/common';
import { BeachsController } from './controllers';
import { BeachRepository } from './repositories';
import { CreateBeachService, FindAllBeachsService } from './services';

@Module({
  imports: [],
  controllers: [BeachsController],
  providers: [BeachRepository, CreateBeachService, FindAllBeachsService],
})
export class BeachModule {}
