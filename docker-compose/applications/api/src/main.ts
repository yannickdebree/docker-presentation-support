import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    allowedHeaders: [
      'location',
      'content-type',
      'access-control-allow-headers',
      'authorization',
      'access-control-allow-origin'
    ]
  });
  await app.listen(3000);
}
bootstrap();
