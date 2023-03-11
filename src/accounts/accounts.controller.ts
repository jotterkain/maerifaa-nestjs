import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AccountsService } from "./accounts.service";
import { CreateAccountDto, UpdateAccountDto } from "./dto";

@Controller("accounts")
export class AccountsController {

  constructor(private accountService: AccountsService) {
  }
  @Get()
  getAccounts() {
    return this.accountService.getAccounts();
  }

  @Post()
  createAccount(@Body() accountDTP: CreateAccountDto) {
    return this.accountService.createAccount(accountDTP);
  }

  @Put(":number")
  updateAccount(@Param("number") accountNumber: string, accountDTO: UpdateAccountDto) {
    return this.accountService.updateAccount(accountNumber, accountDTO);
  }

  @Delete(":number")
  deleteAccount(@Param("number") accountNumber: string) {
    return this.accountService.deleteAccount(accountNumber);
  }
}
