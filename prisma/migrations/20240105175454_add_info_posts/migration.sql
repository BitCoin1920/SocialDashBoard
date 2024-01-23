/*
  Warnings:

  - Added the required column `color` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateEnd` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "dateEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
