import { Injectable, NotFoundException } from '@nestjs/common';
import { Book, CreateBookDto, UpdateBookDto } from '@app/contracts/books';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      rating: 4,
    },
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      rating: 3,
    },
  ];
  create(createBookDto: CreateBookDto) {
    const newBook: Book = {
      ...createBookDto,
      id: this.books.length + 1,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const bookIndex = this.books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return this.books[bookIndex];
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const bookIndex = this.books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    this.books[bookIndex] = {
      ...this.books[bookIndex],
      ...updateBookDto,
    };
  }

  remove(id: number) {
    const bookIndex = this.books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    this.books = this.books.slice(bookIndex, 1);
  }
}
