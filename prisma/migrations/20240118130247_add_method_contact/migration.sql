/*
  Warnings:

  - Added the required column `method_contact` to the `influencer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "influencer" ADD COLUMN     "method_contact" TEXT NOT NULL;
