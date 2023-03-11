/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Purpose` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `ExpenseCategory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expenseCategoryId` to the `Purpose` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Purpose" DROP CONSTRAINT "Purpose_categoryId_fkey";

-- AlterTable
ALTER TABLE "Purpose" DROP COLUMN "categoryId",
ADD COLUMN     "expenseCategoryId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ExpenseCategory_name_key" ON "ExpenseCategory"("name");

-- AddForeignKey
ALTER TABLE "Purpose" ADD CONSTRAINT "Purpose_expenseCategoryId_fkey" FOREIGN KEY ("expenseCategoryId") REFERENCES "ExpenseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
