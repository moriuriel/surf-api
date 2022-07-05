import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configurate from './config/configurate';
import { ProxyLogger } from './shared/logger/proxyLogger';

async function bootstrap() {
  const logger = ProxyLogger.createProxyLogger('MAIN');
  const port = configurate().port;

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => {
    logger.log(`API is running on port ${port} 🏄‍♂️`);
  });
}
bootstrap();
