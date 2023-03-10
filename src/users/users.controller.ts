import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Post()
  createUser(@Body() userDTO: CreateUserDto ) {
    return this.userService.createUser(userDTO);
  }
}
