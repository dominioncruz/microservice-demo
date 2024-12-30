import { NestFactory } from '@nestjs/core';
import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';
import { ConfigModule } from './config/config.module';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGatewayModule);
  ConfigModule.configureSwagger(app);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
