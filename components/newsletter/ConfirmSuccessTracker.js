"use client";

import { useEffect } from "react";
import { track, EVENTS } from "@/lib/analytics";

// Fires newsletter_confirm_success once on mount (PRD-002 Section 11)
export default function ConfirmSuccessTracker() {
  useEffect(() => {
    track(EVENTS.NEWSLETTER_CONFIRM_SUCCESS);
  }, []);
  return null;
}
