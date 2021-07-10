import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/1.0');
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  const PORT = 8081;
  await app.listen(PORT, () => {
    console.log('started on port ', PORT);
  });
}
bootstrap();
