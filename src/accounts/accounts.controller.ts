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

  @Get(":id")
  getAccount(@Param("id") accountId:string){
    return this.accountService.getAccount(accountId)
  }

  @Post()
  createAccount(@Body() accountDTP: CreateAccountDto) {
    return this.accountService.createAccount(accountDTP);
  }

  @Put(":id")
  updateAccount(@Param("id") accountId: string, accountDTO: UpdateAccountDto) {
    return this.accountService.updateAccount(accountId, accountDTO);
  }

  @Delete(":id")
  deleteAccount(@Param("id") accountId: string) {
    return this.accountService.deleteAccount(accountId);
  }
}
