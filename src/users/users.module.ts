import { Module } from '@nestjs/common';
import UsersController from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //connecting the entity to its parent module creates a repository
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
