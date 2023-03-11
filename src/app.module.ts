import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersController } from "./users/users.controller";
import { ConfigModule } from "@nestjs/config";
import { AccountsController } from './accounts/accounts.controller';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    PrismaModule,
    AccountsModule],
  controllers: [UsersController, AccountsController],
})
export class AppModule {
}
