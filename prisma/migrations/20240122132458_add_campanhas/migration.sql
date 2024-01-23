-- AlterTable
ALTER TABLE "influencer" ADD COLUMN     "campaigns" TEXT,
ADD COLUMN     "observation" TEXT;

-- CreateTable
CREATE TABLE "campaigns" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campaigns_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "influencer" ADD CONSTRAINT "influencer_campaigns_fkey" FOREIGN KEY ("campaigns") REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;
