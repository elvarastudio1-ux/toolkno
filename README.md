# Toolkno

Toolkno is a Next.js 14 App Router project for free online text tools with AdSense monetization, future-ready paid subscriptions, and a dark Tailwind-based UI.

## Tech stack

- Next.js 14 App Router
- React 18
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- NextAuth.js
- Razorpay
- Resend
- Vercel

## Setup

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Environment variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`
- `NODE_ENV`
- `DATABASE_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `NEXT_PUBLIC_RAZORPAY_KEY_ID`
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `NEXT_PUBLIC_ADSENSE_ID`

## Deploy

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Add the production environment variables in Vercel.
4. Run `npm run build` during deployment.
5. Point your domain to the Vercel project.
