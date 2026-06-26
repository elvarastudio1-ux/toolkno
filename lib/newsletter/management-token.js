import { prisma } from "@/lib/prisma";

const TOKEN_REGEX = /^[a-f0-9]{64}$/;

export async function validateManagementToken(token) {
  if (!token || !TOKEN_REGEX.test(token)) return null;

  const record = await prisma.subscriberToken.findUnique({
    where: { token },
    include: { subscriber: true },
  });

  if (!record) return null;
  if (record.type !== "management") return null;
  if (record.usedAt) return null;
  if (record.expiresAt && record.expiresAt < new Date()) return null;

  return record;
}
