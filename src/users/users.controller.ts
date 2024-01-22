import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { createUserDTO } from './dtos/createUser.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('auth')
export default class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }
  @Get()
  findAllUsers(@Query('email') email:string){
    return this.userService.find(email)
  }

  @Post('/signup')
  createUser(@Body() body: createUserDTO) {
    return this.userService.create(body.email, body.password);
  }

  @Patch()
  updateUser(@Param('id') id: string, @Body() body: Partial<User>) {
    return this.userService.update(parseInt(id), body);
  }
}
