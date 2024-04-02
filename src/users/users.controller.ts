import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto'; // Import DTO for creating user

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}


  
  @Get('/users')
  findAll() {
    console.log('findAll');
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('findOne', id);
    return this.userService.findOne(id); // Call userService to find a user by ID
  }

  @Post('/users')
  create(@Body() createUserDto: CreateUserDto) {
    console.log('create', createUserDto);
    return this.userService.create(createUserDto);
  }

  @Put(':id') // Endpoint path to update a user by ID
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    console.log('update', id, updateUserDto);
    return this.userService.update(id, updateUserDto);
  }
}
