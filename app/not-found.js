import Link from "next/link";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return buildMetadata({
    title: "Page Not Found",
    description: "The page you were looking for does not exist on Toolkno.",
    noIndex: true
  });
}

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">404</p>
      <h1 className="mt-6 font-heading text-5xl font-bold text-text sm:text-6xl">That tool is off the grid</h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
        The link may be broken, the tool may still be in the coming-soon queue, or the page was moved to a
        different route.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button as={Link} href="/tools">
          Browse tools
        </Button>
        <Button as={Link} href="/" variant="secondary">
          Back home
        </Button>
      </div>
    </main>
  );
}
