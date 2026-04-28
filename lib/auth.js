import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession } from "next-auth";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";

// Lazy builder: nothing inside runs until first request.
// PrismaAdapter, GoogleProvider, EmailProvider all evaluated at call time, NOT at module import.
let _options = null;
let _handler = null;

function buildAuthOptions() {
  if (_options) return _options;
  _options = {
    adapter: PrismaAdapter(prisma),
    session: {
      strategy: "database"
    },
    pages: {
      signIn: "/login",
      verifyRequest: "/login?status=check-email"
    },
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      EmailProvider({
        from: process.env.EMAIL_FROM,
        maxAge: 24 * 60 * 60,
        async sendVerificationRequest({ identifier, url, provider }) {
          try {
            await resend.emails.send({
              from: provider.from,
              to: identifier,
              subject: "Your Toolkno sign-in link",
              html: `
                <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#111118;color:#f0ede6;border-radius:24px">
                  <p style="letter-spacing:0.2em;text-transform:uppercase;color:#5DCAA5;font-size:12px;margin:0 0 16px">Toolkno</p>
                  <h1 style="font-size:28px;line-height:1.2;margin:0 0 12px">Sign in to your account</h1>
                  <p style="font-size:16px;line-height:1.7;color:#d4d2cb;margin:0 0 24px">Use the secure button below to access your Toolkno dashboard. The link expires in 24 hours.</p>
                  <a href="${url}" style="display:inline-block;padding:14px 24px;background:#5DCAA5;color:#0a0a0f;border-radius:999px;font-weight:700;text-decoration:none">Sign in to Toolkno</a>
                  <p style="font-size:14px;line-height:1.7;color:#a9a7b0;margin:24px 0 0">If you did not request this email, you can safely ignore it.</p>
                </div>
              `
            });
          } catch (error) {
            throw new Error(`Unable to send verification email: ${error.message}`);
          }
        }
      })
    ],
    callbacks: {
      async session({ session, user }) {
        if (session.user) {
          session.user.id = user.id;
          session.user.plan = user.plan;
          session.user.planExpiresAt = user.planExpiresAt;
        }
        return session;
      }
    },
    events: {
      async signIn({ user }) {
        if (!user?.id || !user?.email) return;

        await prisma.user.update({
          where: { id: user.id },
          data: {
            plan: user.plan || "free"
          }
        });
      }
    }
  };
  return _options;
}

function getHandler() {
  if (!_handler) _handler = NextAuth(buildAuthOptions());
  return _handler;
}

// Lazy-bound handler — NextAuth() not called at module load.
export function authHandler(...args) {
  return getHandler()(...args);
}

export function getSession() {
  return getServerSession(buildAuthOptions());
}
