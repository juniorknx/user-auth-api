/*
  Warnings:

  - Added the required column `city` to the `Adress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Adress" ADD COLUMN     "city" TEXT NOT NULL;
