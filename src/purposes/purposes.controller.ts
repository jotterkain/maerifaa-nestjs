import { Controller, Get } from "@nestjs/common";
import { PurposesService } from "./purposes.service";

@Controller("purposes")
export class PurposesController {
  constructor(private purposesService: PurposesService) {
  }

  @Get()
  getPurposes(){
    return "Work"
  }
}
