import { Body, Controller, Post } from '@nestjs/common';
import { createUserDTO } from './dtos/createUser.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  createUser(@Body() body: createUserDTO) {
    return this.userService.create(body.email, body.password);
  }
}
