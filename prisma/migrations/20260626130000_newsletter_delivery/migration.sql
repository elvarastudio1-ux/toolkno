-- CreateEnum
CREATE TYPE "IssueStatus" AS ENUM ('draft', 'scheduled', 'sending', 'sent', 'cancelled');

-- CreateEnum
CREATE TYPE "AudienceType" AS ENUM ('all_confirmed', 'segment');

-- CreateEnum
CREATE TYPE "SendStatus" AS ENUM ('pending', 'sent', 'opened', 'clicked', 'bounced', 'complained', 'failed');

-- CreateSequence for issueNumber autoincrement
CREATE SEQUENCE "NewsletterIssue_issueNumber_seq";

-- CreateTable
CREATE TABLE "NewsletterIssue" (
    "id" TEXT NOT NULL,
    "issueNumber" INTEGER NOT NULL DEFAULT nextval('"NewsletterIssue_issueNumber_seq"'),
    "slug" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "preheader" TEXT,
    "htmlContent" TEXT NOT NULL,
    "textContent" TEXT NOT NULL,
    "status" "IssueStatus" NOT NULL DEFAULT 'draft',
    "audienceType" "AudienceType" NOT NULL DEFAULT 'all_confirmed',
    "scheduledAt" TIMESTAMP(3),
    "sentAt" TIMESTAMP(3),
    "sentCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsletterIssue_pkey" PRIMARY KEY ("id")
);

ALTER SEQUENCE "NewsletterIssue_issueNumber_seq" OWNED BY "NewsletterIssue"."issueNumber";

-- CreateTable
CREATE TABLE "NewsletterSend" (
    "id" TEXT NOT NULL,
    "issueId" TEXT NOT NULL,
    "subscriberId" TEXT NOT NULL,
    "emailSnapshot" TEXT NOT NULL,
    "status" "SendStatus" NOT NULL DEFAULT 'pending',
    "resendMessageId" TEXT,
    "sentAt" TIMESTAMP(3),
    "openedAt" TIMESTAMP(3),
    "lastOpenedAt" TIMESTAMP(3),
    "openCount" INTEGER NOT NULL DEFAULT 0,
    "clickedAt" TIMESTAMP(3),
    "bouncedAt" TIMESTAMP(3),
    "complainedAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsletterSend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsletterClick" (
    "id" TEXT NOT NULL,
    "sendId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "clickedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ipAddressHash" TEXT,
    "userAgent" TEXT,

    CONSTRAINT "NewsletterClick_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterIssue_issueNumber_key" ON "NewsletterIssue"("issueNumber");

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterIssue_slug_key" ON "NewsletterIssue"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterSend_issueId_subscriberId_key" ON "NewsletterSend"("issueId", "subscriberId");

-- CreateIndex
CREATE INDEX "NewsletterSend_issueId_idx" ON "NewsletterSend"("issueId");

-- CreateIndex
CREATE INDEX "NewsletterSend_subscriberId_idx" ON "NewsletterSend"("subscriberId");

-- CreateIndex
CREATE INDEX "NewsletterSend_resendMessageId_idx" ON "NewsletterSend"("resendMessageId");

-- CreateIndex
CREATE INDEX "NewsletterSend_status_idx" ON "NewsletterSend"("status");

-- CreateIndex
CREATE INDEX "NewsletterClick_sendId_idx" ON "NewsletterClick"("sendId");

-- CreateIndex
CREATE INDEX "NewsletterClick_url_idx" ON "NewsletterClick"("url");

-- AddForeignKey
ALTER TABLE "NewsletterSend" ADD CONSTRAINT "NewsletterSend_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "NewsletterIssue"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsletterSend" ADD CONSTRAINT "NewsletterSend_subscriberId_fkey" FOREIGN KEY ("subscriberId") REFERENCES "Subscriber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsletterClick" ADD CONSTRAINT "NewsletterClick_sendId_fkey" FOREIGN KEY ("sendId") REFERENCES "NewsletterSend"("id") ON DELETE CASCADE ON UPDATE CASCADE;
