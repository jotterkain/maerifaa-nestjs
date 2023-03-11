/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Account` table. All the data in the column will be lost.
  - The required column `number` was added to the `Account` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_accountId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
DROP COLUMN "id",
ADD COLUMN     "number" UUID NOT NULL,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("number");

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
