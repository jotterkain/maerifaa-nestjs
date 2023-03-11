import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateActionDto } from "./dto";

@Injectable()
export class ActionsService {
  constructor(private prismService: PrismaService) {
  }

  async getActions() {
    return await this.prismService.action.findMany();
  }

  async getAction(id: string) {
    return await this.prismService.action.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createAction(actionDTO: CreateActionDto) {}

}
