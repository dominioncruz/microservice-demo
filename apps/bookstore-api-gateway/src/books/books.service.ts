import {
  Book,
  BOOK_PATTERN,
  CreateBookDto,
  UpdateBookDto,
} from '@app/contracts/books';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_CLIENT') private booksClient: ClientProxy) {}

  //first try using generic types in my codebase, so it helps consider different datatypes, in this context
  //the pattern is a string, and the data is an object
  //observable is a stream of data, so it can be used to handle async operations
  private send<T, U>(
    pattern: (typeof BOOK_PATTERN)[keyof typeof BOOK_PATTERN],
    data: U,
  ): Observable<T> {
    return this.booksClient.send<T, U>(pattern, data);
  }

  create(createBookDto: CreateBookDto) {
    return this.send<Book, CreateBookDto>(BOOK_PATTERN.CREATE, createBookDto);
  }

  findAll() {
    return this.send<Book[], Record<string, never>>(BOOK_PATTERN.FIND_ALL, {});
  }

  findOne(id: number) {
    return this.send<Book, number>(BOOK_PATTERN.FIND_ONE, id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.send<void, UpdateBookDto>(BOOK_PATTERN.UPDATE, {
      id,
      ...updateBookDto,
    });
  }

  remove(id: number) {
    return this.send<void, number>(BOOK_PATTERN.REMOVE, id);
  }
}
