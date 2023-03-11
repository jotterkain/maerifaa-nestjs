import {
  Injectable,
  InternalServerErrorException,
  RequestTimeoutException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";
import { CreateAccountDto, UpdateAccountDto } from "./dto";
import { requestErrorThrow } from "../utils/helpers";


@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {
  }

  async getAccounts() {
    try {
      return await this.prisma.account.findMany();
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
          case "P1008":
            throw new RequestTimeoutException(`Timeout`);
          default:
            console.log(err);
            throw new InternalServerErrorException("Something went wrong on the server");
        }
      } else {
        console.log(err);
        throw new InternalServerErrorException("Something went wrong on the server");
      }
    }
  }

  async getAccount(accountId:string){
    try {
      return this.prisma.account.findUnique({
        where: {
          id: accountId
        }
      })
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async createAccount(accountDTO: CreateAccountDto) {
    try {
      return await this.prisma.account.create({
        data: accountDTO,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async updateAccount(accountNumber: string, accountDTO: UpdateAccountDto) {
    try {
      return await this.prisma.user.update({
        where: {
          id: accountNumber,
        },
        data: accountDTO,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async deleteAccount(accountId: string) {
    try {
      return await this.prisma.account.delete({
        where: {
          id: accountId,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }
}

