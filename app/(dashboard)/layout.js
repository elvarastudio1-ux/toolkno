import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

export default async function DashboardLayout({ children }) {
  const session = await getSession();

  if (!session) {
    redirect("/login?callbackUrl=/dashboard");
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Account workspace</p>
        <h1 className="mt-3 font-heading text-5xl font-bold text-text">Welcome back, {session.user.name || "friend"}</h1>
      </div>
      {children}
    </main>
  );
}
