"use client";

import { useEffect } from "react";
import { track, EVENTS } from "@/lib/analytics";

export default function UnsubscribeTracker() {
  useEffect(() => {
    track(EVENTS.NEWSLETTER_UNSUBSCRIBE);
  }, []);
  return null;
}
