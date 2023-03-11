/*
  Warnings:

  - You are about to drop the `PurposeCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Purpose" DROP CONSTRAINT "Purpose_categoryId_fkey";

-- DropTable
DROP TABLE "PurposeCategory";

-- CreateTable
CREATE TABLE "ExpenseCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ExpenseCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Purpose" ADD CONSTRAINT "Purpose_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ExpenseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
