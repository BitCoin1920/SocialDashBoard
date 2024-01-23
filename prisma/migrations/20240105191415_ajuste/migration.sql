/*
  Warnings:

  - You are about to drop the column `date` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `dateEnd` on the `posts` table. All the data in the column will be lost.
  - Added the required column `end` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "date",
DROP COLUMN "dateEnd",
ADD COLUMN     "end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL;
