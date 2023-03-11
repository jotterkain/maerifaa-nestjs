import { Module } from '@nestjs/common';
import { PurposesService } from './purposes.service';
import { PurposesController } from './purposes.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [PurposesService],
  controllers: [PurposesController],
  exports: [PurposesService]
})
export class PurposesModule {}
