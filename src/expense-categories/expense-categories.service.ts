import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ExpenseCategoriesService {
  constructor(private prismaService: PrismaService) {
  }
}
