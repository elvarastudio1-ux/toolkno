import SignupForm from "@/components/auth/SignupForm";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return buildMetadata({
    title: "Signup",
    description: "Create a free Toolkno account to save billing access and prepare for premium features.",
    path: "/signup"
  });
}

export default function SignupPage() {
  return <SignupForm />;
}
