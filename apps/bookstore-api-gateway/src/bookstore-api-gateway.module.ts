import { Module } from '@nestjs/common';
import { BookstoreApiGatewayController } from './bookstore-api-gateway.controller';
import { BookstoreApiGatewayService } from './bookstore-api-gateway.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { ConfigModule } from './config/config.module';

@Module({
  controllers: [BookstoreApiGatewayController],
  providers: [BookstoreApiGatewayService],
  imports: [UsersModule, BooksModule, ConfigModule],
})
export class BookstoreApiGatewayModule {}
