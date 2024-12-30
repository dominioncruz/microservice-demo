import { INestApplication, Module } from '@nestjs/common';
import { SwaggerConfig } from './swagger.config';

@Module({})
export class ConfigModule {
  static configureSwagger(app: INestApplication<any>): void {
    console.log('Configuring Swagger');
    SwaggerConfig.setup(app);
  }
}
