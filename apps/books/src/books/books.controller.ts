import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';
import {
  CreateBookDto,
  UpdateBookDto,
  BOOK_PATTERN,
} from '@app/contracts/books';
@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern(BOOK_PATTERN.CREATE)
  create(@Payload() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern(BOOK_PATTERN.FIND_ALL)
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern(BOOK_PATTERN.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern(BOOK_PATTERN.UPDATE)
  update(@Payload() updateBookDto: UpdateBookDto) {
    return this.booksService.update(updateBookDto.id, updateBookDto);
  }

  @MessagePattern(BOOK_PATTERN.REMOVE)
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}
