"use client";

import Link from "next/link";
import { track, EVENTS } from "@/lib/analytics";

export default function ResubscribeLink({ className }) {
  return (
    <Link
      href="/#newsletter"
      className={className}
      onClick={() => track(EVENTS.NEWSLETTER_RESUBSCRIBE_ATTEMPT)}
    >
      Resubscribe
    </Link>
  );
}
