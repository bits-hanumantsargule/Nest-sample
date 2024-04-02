import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  firstName: string;

  @Column()
  @IsString()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isDeleted: boolean;
}