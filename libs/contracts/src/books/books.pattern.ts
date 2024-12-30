const BOOK_PATTERN = {
  CREATE: 'books.createBook',
  FIND_ALL: 'books.findAllBooks',
  FIND_ONE: 'books.findOneBook',
  UPDATE: 'books.updateBook',
  REMOVE: 'books.removeBook',
} as const;

export default BOOK_PATTERN;
