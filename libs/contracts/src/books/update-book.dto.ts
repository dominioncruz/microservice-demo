import { PartialType } from '@nestjs/mapped-types';
import CreateBookDto from './create-book.dto';

class UpdateBookDto extends PartialType(CreateBookDto) {
  id: number;
}

export default UpdateBookDto;
