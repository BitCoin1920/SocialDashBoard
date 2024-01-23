-- AlterTable
ALTER TABLE "influencer" ADD COLUMN     "archiving" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "request_archiving" BOOLEAN NOT NULL DEFAULT true;
