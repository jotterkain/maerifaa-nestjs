import { ConflictException, Injectable, NotFoundException, RequestTimeoutException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto";
import { Prisma } from "@prisma/client";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Injectable({})
export class UsersService {
  constructor(private prisma: PrismaService) {
  }

  async createUser(userDTO: CreateUserDto) {
    try {
      return await this.prisma.user.create({
        data: userDTO,
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
          case "P1008":
            throw new RequestTimeoutException(`Timeout`);
          case "P2002":
            throw new ConflictException("There is a unique constraint violation");
          default:
            throw err;
        }
      } else {
        throw err;
      }
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
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
          case "P1008":
            throw new RequestTimeoutException(`Timeout`);
          case "P2025" || "P2018":
            throw new NotFoundException("operation failed because it depends on one or more records that were required but not found. {cause}");
          case "P2002":
            throw new ConflictException("There is a unique constraint violation");
          default:
            throw err;
        }
      } else {
        throw err;
      }
    }
  }
}