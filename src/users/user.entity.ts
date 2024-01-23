// import { Exclude } from 'class-transformer';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  // @Exclude()
  password: string;
  @AfterInsert()
  logInserted() {
    console.log(`Just inserted a user with id ${this.id}`);
  }

  @AfterUpdate()
  logUpdated() {
    console.log(`Just updated a user with id ${this.id}`);
  }
  @AfterRemove()
  logRemoved() {
    console.log(`Just removed a user with id ${this.id}`);
  }
}
