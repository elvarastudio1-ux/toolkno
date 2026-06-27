"use client";

import { useEffect } from "react";
import { track, EVENTS } from "@/lib/analytics";

// Fires the review_view analytics event on mount (PRD-003 AN-002).
// Pattern mirrors ConfirmSuccessTracker / UnsubscribeTracker. Renders nothing.
export default function ReviewViewTracker({ slug }) {
  useEffect(() => {
    track(EVENTS.REVIEW_VIEW, { slug });
  }, [slug]);
  return null;
}
