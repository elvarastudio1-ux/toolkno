"use client";

import ToolCard from "@/components/tools/ToolCard";
import { track, EVENTS } from "@/lib/analytics";

export default function PopularToolsGrid({ popular }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {popular.map((tool) => (
        <div
          key={tool.slug}
          onClick={() => track(EVENTS.POPULAR_TOOL_CLICK, { slug: tool.slug })}
        >
          <ToolCard tool={tool} compact />
        </div>
      ))}
    </div>
  );
}
