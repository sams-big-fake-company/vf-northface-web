/**
 * Lightweight in-repo experimentation framework.
 *
 * Variant assignment is deterministic per experiment key so server and client
 * render the same variant. Results are exported nightly by the analytics
 * pipeline to analytics/experiment-results.json.
 */

export type Variant = "A" | "B";

export interface ExperimentDefinition {
  key: string;
  description: string;
  status: "running" | "completed" | "rolled_out";
  variants: Record<Variant, string>;
  startedAt: string;
}

export const experiments: ExperimentDefinition[] = [
  {
    key: "pdp-sticky-add-to-cart",
    description:
      "Sticky add-to-cart bar on product detail pages for mobile viewports.",
    status: "running",
    variants: {
      A: "Standard in-page add-to-cart button",
      B: "Sticky bottom add-to-cart bar on scroll",
    },
    startedAt: "2026-08-20",
  },
];

function bucket(key: string): number {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h % 100;
}

/** Returns the variant currently served for an experiment (50/50 split). */
export function getVariant(experimentKey: string): Variant {
  const def = experiments.find((e) => e.key === experimentKey);
  if (!def || def.status === "rolled_out") return "A";
  return bucket(experimentKey) < 50 ? "A" : "B";
}
