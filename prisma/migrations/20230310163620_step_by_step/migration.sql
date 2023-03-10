/*
  Warnings:

  - You are about to drop the column `birthCity` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `birthCountry` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `doc_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `doc_type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profilePicture` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `quartier` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `region` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `stateCode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `ville` on the `User` table. All the data in the column will be lost.
  - Added the required column `From` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Made the column `countryCode` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "User_profilePicture_key";

-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "From" TEXT NOT NULL,
ADD COLUMN     "to" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "birthCity",
DROP COLUMN "birthCountry",
DROP COLUMN "doc_id",
DROP COLUMN "doc_type",
DROP COLUMN "profilePicture",
DROP COLUMN "quartier",
DROP COLUMN "region",
DROP COLUMN "stateCode",
DROP COLUMN "ville",
ADD COLUMN     "city" TEXT,
ALTER COLUMN "countryCode" SET NOT NULL;
