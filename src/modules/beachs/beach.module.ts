import { Module } from '@nestjs/common';
import { BeachsController } from './controllers';
import { BeachRepository } from './repositories';
import { CreateBeachService } from './services';

@Module({
  imports: [],
  controllers: [BeachsController],
  providers: [BeachRepository, CreateBeachService],
})
export class BeachModule {}
