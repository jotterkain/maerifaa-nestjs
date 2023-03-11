/*
  Warnings:

  - A unique constraint covering the columns `[name,ownerId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Account_name_ownerId_key" ON "Account"("name", "ownerId");
