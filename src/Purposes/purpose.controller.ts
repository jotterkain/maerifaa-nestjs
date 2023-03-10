import { Controller, Delete, Get, Post } from "@nestjs/common";
import { PurposeService } from "./purpose.service";

@Controller("purposes")
export class PurposeController {
  constructor(private purposeService: PurposeService) {
  }

  @Post()
  createPurpose() {
  }

  @Get()
  getAllPurposes() {
  }

  @Delete("/:id")
  deletePurpose() {
  }

}