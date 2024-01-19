import { Body, Controller, Post } from '@nestjs/common';
import { createUserDTO } from './dtos/createUser.dto';
import { UsersService } from './UsersService';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  createUser(@Body() body: createUserDTO) {
    return this.userService.create(body.email, body.password);
  }
}
