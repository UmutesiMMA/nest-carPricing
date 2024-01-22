import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { createUserDTO } from './dtos/createUser.dto';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './dtos/updateUser.dto';

@Controller('auth')
export default class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/:id')
  findUser(@Param('id') id: string) {
    try {
      return this.userService.findOne(parseInt(id));
    } catch (error) {
      throw error;
    }
  }
  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Post('/signup')
  createUser(@Body() body: createUserDTO) {
    return this.userService.create(body.email, body.password);
  }

  @Patch()
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDTO) {
    return this.userService.update(parseInt(id), body);
  }
}
