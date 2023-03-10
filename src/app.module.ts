import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PurposeModule } from "./Purposes/purpose.module";

@Module({
  imports: [UsersModule,PurposeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
