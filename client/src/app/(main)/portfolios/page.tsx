export const dynamic = "force-dynamic";

import { PortfolioPost } from "@/components/portfolio-post";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAllPortfolios } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolios | thrivenvision",
  description:
    "Explore thrivenvision's digital expertise! See our portfolio showcasing exceptional work across various services.",
};

export default async function Portfolios() {
  const portfolios = await getAllPortfolios();

  return (
    <main className="container relative z-10 mx-auto max-w-6xl px-2 pt-10 sm:px-4">
      <SectionHeading className="!pb-[max(3.5dvw,_2rem)]">
        Portfolio Spotlight: Witness Our Impact
      </SectionHeading>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {portfolios.map(({ id, instagramURL }) => (
          <PortfolioPost key={id} url={instagramURL} />
        ))}
      </div>
    </main>
  );
}
