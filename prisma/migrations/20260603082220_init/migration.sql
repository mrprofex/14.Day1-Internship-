/*
  Warnings:

  - Added the required column `roll1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roll2` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roll1" TEXT NOT NULL,
ADD COLUMN     "roll2" TEXT NOT NULL;
