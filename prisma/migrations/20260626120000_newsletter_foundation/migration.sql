-- CreateEnum
CREATE TYPE "SubscriberStatus" AS ENUM ('pending', 'confirmed', 'unsubscribed', 'bounced', 'complained', 'inactive');

-- CreateEnum
CREATE TYPE "EmailFrequency" AS ENUM ('every_issue', 'digest_only');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('confirmation', 'unsubscribe', 'resubscribe', 'management');

-- AlterTable: add role to User (non-destructive — existing rows get default "user")
ALTER TABLE "User" ADD COLUMN "role" TEXT NOT NULL DEFAULT 'user';

-- CreateTable: Subscriber
CREATE TABLE "Subscriber" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailNormalized" TEXT NOT NULL,
    "status" "SubscriberStatus" NOT NULL DEFAULT 'pending',
    "source" TEXT NOT NULL,
    "frequency" "EmailFrequency" NOT NULL DEFAULT 'every_issue',
    "subscribedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmedAt" TIMESTAMP(3),
    "unsubscribedAt" TIMESTAMP(3),
    "bouncedAt" TIMESTAMP(3),
    "complainedAt" TIMESTAMP(3),
    "lastOpenedAt" TIMESTAMP(3),
    "lastClickedAt" TIMESTAMP(3),
    "openCount" INTEGER NOT NULL DEFAULT 0,
    "clickCount" INTEGER NOT NULL DEFAULT 0,
    "issuesReceived" INTEGER NOT NULL DEFAULT 0,
    "ipAddressHash" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Subscriber_pkey" PRIMARY KEY ("id")
);

-- CreateTable: SubscriberToken
CREATE TABLE "SubscriberToken" (
    "id" TEXT NOT NULL,
    "subscriberId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "type" "TokenType" NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "usedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SubscriberToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable: SubscriberEvent
CREATE TABLE "SubscriberEvent" (
    "id" TEXT NOT NULL,
    "subscriberId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "previousStatus" "SubscriberStatus",
    "newStatus" "SubscriberStatus",
    "metadata" JSONB,
    "actor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SubscriberEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable: RateLimitEntry
CREATE TABLE "RateLimitEntry" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 1,
    "windowStart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "RateLimitEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscriber_email_key" ON "Subscriber"("email");
CREATE UNIQUE INDEX "Subscriber_emailNormalized_key" ON "Subscriber"("emailNormalized");
CREATE UNIQUE INDEX "SubscriberToken_token_key" ON "SubscriberToken"("token");
CREATE INDEX "RateLimitEntry_key_idx" ON "RateLimitEntry"("key");
CREATE INDEX "RateLimitEntry_expiresAt_idx" ON "RateLimitEntry"("expiresAt");

-- AddForeignKey
ALTER TABLE "SubscriberToken" ADD CONSTRAINT "SubscriberToken_subscriberId_fkey"
    FOREIGN KEY ("subscriberId") REFERENCES "Subscriber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "SubscriberEvent" ADD CONSTRAINT "SubscriberEvent_subscriberId_fkey"
    FOREIGN KEY ("subscriberId") REFERENCES "Subscriber"("id") ON DELETE CASCADE ON UPDATE CASCADE;
