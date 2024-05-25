/*
  Warnings:

  - Added the required column `flag` to the `ProjectDescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectDescription" ADD COLUMN     "flag" TEXT NOT NULL;
