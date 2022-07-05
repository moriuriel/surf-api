import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import configurate from './../../config/configurate';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `${configurate().database.uri}`,
        dbName: configurate().database.name,
      }),
    }),
  ],
})
export class DatabaseModule {}
