import { Injectable, } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { requestErrorThrow } from "../utils/helpers";

@Injectable({})
export class UsersService {
  constructor(private prisma: PrismaService) {
  }

  async getUsers() {
    try {
      return await this.prisma.user.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async createUser(userDTO: CreateUserDto) {
    try {
      return await this.prisma.user.create({
        data: userDTO,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async updateUser(userId: string, userDTO: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        where: {
          id: userId,
        },
        data: userDTO,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }
}