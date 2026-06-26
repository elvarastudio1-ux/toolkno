"use client";

import { useMemo, useState } from "react";
import ToolCard from "@/components/tools/ToolCard";
import { categories } from "@/lib/tools";

export default function ToolExplorer({ tools, initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === "All" ||
        tool.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesQuery =
        !query ||
        `${tool.name} ${tool.description} ${tool.category}`
          .toLowerCase()
          .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, tools]);

  return (
    <div>
      <label htmlFor="tool-search" className="sr-only">
        Search tools by name, use case, or category
      </label>
      <input
        id="tool-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search tools, use cases, or categories"
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      />

      <div role="group" aria-label="Filter tools by category" className="mt-5 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
              activeCategory === category
                ? "border-sky-500 bg-sky-500 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-sky-400 hover:text-sky-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p aria-live="polite" aria-atomic="true" className="sr-only">
        {filteredTools.length === 1
          ? "1 tool found"
          : `${filteredTools.length} tools found`}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
