-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('draft', 'published', 'archived');

-- CreateEnum
CREATE TYPE "ReviewUpdateType" AS ENUM ('correction', 'verdict_change', 'price_update', 'feature_change', 'audit');

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "ReviewStatus" NOT NULL DEFAULT 'draft',
    "productName" TEXT NOT NULL,
    "productVendor" TEXT,
    "productCategory" TEXT NOT NULL,
    "verdict" TEXT NOT NULL,
    "whoFor" TEXT NOT NULL,
    "testingSummary" TEXT NOT NULL,
    "whatWorks" TEXT NOT NULL,
    "whatDoesntWork" TEXT NOT NULL,
    "pricingNotes" TEXT NOT NULL,
    "verdictExpanded" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "testingStartedAt" TIMESTAMP(3) NOT NULL,
    "testingEndedAt" TIMESTAMP(3) NOT NULL,
    "accountTierTested" TEXT,
    "pricingVerifiedAt" TIMESTAMP(3),
    "score" INTEGER,
    "isAffiliate" BOOLEAN NOT NULL DEFAULT false,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "authorId" TEXT,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewAlternative" (
    "id" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "whenBetter" TEXT NOT NULL,
    "linkSlug" TEXT,
    "position" INTEGER NOT NULL,

    CONSTRAINT "ReviewAlternative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewUpdate" (
    "id" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "ReviewUpdateType" NOT NULL,
    "note" TEXT NOT NULL,
    "previousVerdict" TEXT,
    "newVerdict" TEXT,

    CONSTRAINT "ReviewUpdate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_slug_key" ON "Review"("slug");

-- CreateIndex
CREATE INDEX "Review_status_idx" ON "Review"("status");

-- CreateIndex
CREATE INDEX "Review_publishedAt_idx" ON "Review"("publishedAt");

-- CreateIndex
CREATE INDEX "Review_productCategory_idx" ON "Review"("productCategory");

-- CreateIndex
CREATE INDEX "ReviewAlternative_reviewId_idx" ON "ReviewAlternative"("reviewId");

-- CreateIndex
CREATE INDEX "ReviewUpdate_reviewId_idx" ON "ReviewUpdate"("reviewId");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewAlternative" ADD CONSTRAINT "ReviewAlternative_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewUpdate" ADD CONSTRAINT "ReviewUpdate_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;
