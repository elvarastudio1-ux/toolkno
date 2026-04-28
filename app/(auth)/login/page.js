import LoginForm from "@/components/auth/LoginForm";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return buildMetadata({
    title: "Login",
    description: "Sign in to Toolkno with Google or a secure email link to manage your subscription and dashboard.",
    path: "/login"
  });
}

export default function LoginPage({ searchParams }) {
  return (
    <LoginForm
      callbackUrl={searchParams?.callbackUrl || "/dashboard"}
      status={searchParams?.status || ""}
    />
  );
}
