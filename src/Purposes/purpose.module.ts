import { Module } from "@nestjs/common";
import { PurposeController } from "./purpose.controller";
import { PurposeService } from "./purpose.service";

@Module({
  controllers: [PurposeController],
  providers: [PurposeService],
})
export class PurposeModule {
}