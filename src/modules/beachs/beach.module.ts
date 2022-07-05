import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BeachsController } from './controllers';
import { MongoDbBeachRepository } from './repositories';
import { Beach, BeachSchema } from './schemas/Beach.schema';
import { CreateBeachService, FindAllBeachsService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Beach.name, schema: BeachSchema }]),
  ],
  controllers: [BeachsController],
  providers: [MongoDbBeachRepository, CreateBeachService, FindAllBeachsService],
})
export class BeachModule {}
