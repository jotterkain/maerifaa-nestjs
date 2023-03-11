import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto";
import { UpdateUserDto } from "./dto";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() userDTO: CreateUserDto) {
    return this.userService.createUser(userDTO);
  }

  @Put(":id")
  updateUser(@Param("id") id: string, @Body() userDTO: UpdateUserDto) {
    return this.userService.updateUser(id, userDTO);
  }
}
