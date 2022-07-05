import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configurate from './config/configurate';
import { BeachModule } from './modules/beachs/beach.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configurate] }),
    DatabaseModule,
    BeachModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
