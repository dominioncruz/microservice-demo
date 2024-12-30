import { Injectable } from '@nestjs/common';
import { User } from './dto/user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 25 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', age: 26 },
  ];
  findAll() {
    console.log('finding users');
    return this.users;
  }
}
