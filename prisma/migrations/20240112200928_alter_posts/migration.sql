/*
  Warnings:

  - You are about to drop the column `color` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `end` on the `posts` table. All the data in the column will be lost.
  - Added the required column `className` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "color",
DROP COLUMN "end",
ADD COLUMN     "className" TEXT NOT NULL;
