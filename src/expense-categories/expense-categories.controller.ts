import { Controller, Get } from "@nestjs/common";
import { ExpenseCategoriesService } from "./expense-categories.service";

@Controller('expense-categories')
export class ExpenseCategoriesController {
  constructor(private expenseCategoriesService: ExpenseCategoriesService) {
  }

  @Get()
  getExpenseCategories(){
    return "Work"
  }
}
