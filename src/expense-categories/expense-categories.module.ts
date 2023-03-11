import { Module } from '@nestjs/common';
import { ExpenseCategoriesService } from './expense-categories.service';
import { ExpenseCategoriesController } from './expense-categories.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [ExpenseCategoriesService],
  controllers: [ExpenseCategoriesController],
  exports: [ExpenseCategoriesService]
})
export class ExpenseCategoriesModule {}
