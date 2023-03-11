import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { PrismaService } from "../prisma/prisma.service";
import { PrismaModule } from "../prisma/prisma.module";
import { ConfigService } from "@nestjs/config";

describe("UsersService", () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [UsersController],
      providers: [UsersService, ConfigService, PrismaService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  describe("createUser", () => {
    it("should create a new user", async () => {
      const userDTO = {
        id: "123e4567-e89b-12d3-a456-426614174001",
        lastName: "Jotter",
        firstName: "Kain",
        email: "jotterkain@gmail.com",
        birthDate: "2002-01-01",
        countryCode: "CM",
        city: "Bafoussam",
      };

      const createdUser = {
        id: "123e4567-e89b-12d3-a456-426614174001",
        lastName: "Jotter",
        firstName: "Kain",
        email: "jotterkain@gmail.com",
        phoneNumber: null,
        countryCode: "CM",
        city: "Bafoussam",
        birthDate: "2002-01-01",
        createdAt: new Date("2023-03-10T20:04:21.951Z"),
        updatedAt: new Date("2023-03-10T20:04:21.951Z"),
      };

      jest.spyOn(service, "createUser").mockResolvedValueOnce(createdUser);

      const result = await controller.createUser(userDTO);

      delete result.createdAt;
      delete result.updatedAt;
      delete createdUser.createdAt;
      delete createdUser.updatedAt;

      expect(result).toEqual(createdUser);
    });
  });

  describe("updateUser", () => {
    it("should update an user", async () => {
      const userDTO = {
        id: "123e4567-e89b-12d3-a456-426614174001",
        lastName: "Jotter",
        firstName: "Kain",
        email: "jotterkain@gmail.com",
        birthDate: "2002-01-01",
        countryCode: "CM",
        city: "Bafoussam",
      };

      const createdUser = {
        id: "123e4567-e89b-12d3-a456-426614174001",
        lastName: "Jotter",
        firstName: "Kain",
        email: "jotterkain@gmail.com",
        phoneNumber: null,
        countryCode: "CM",
        city: "Bafoussam",
        birthDate: "2002-01-01",
        createdAt: new Date("2023-03-10T20:04:21.951Z"),
        updatedAt: new Date("2023-03-10T20:04:21.951Z"),
      };

      const updateUserDTO = {
        lastName: "Lee",
        firstName: "Michael",
        email: "leemichael@gmail.com",
      };

      const updatedUser = {
        id: "123e4567-e89b-12d3-a456-426614174001",
        lastName: "Lee",
        firstName: "Michael",
        email: "leemichael@gmail.com",
        phoneNumber: null,
        countryCode: "CM",
        city: "Bafoussam",
        birthDate: "2002-01-01",
        createdAt: new Date("2023-03-10T20:04:21.951Z"),
        updatedAt: new Date("2023-03-10T20:04:21.951Z"),
      };

      jest.spyOn(service, "createUser").mockResolvedValueOnce(createdUser);

      const created = await controller.createUser(userDTO);

      jest.spyOn(service, "updateUser").mockResolvedValueOnce(updatedUser);

      const result = await controller.updateUser(created.id, updateUserDTO);

      expect(result).toEqual(updatedUser);
    });
  });

});