import { getAllPortfolios } from "@/lib/services";
import { PortfolioPost } from "./portfolio-post";

export async function PortfolioCards() {
  const portfolios = await getAllPortfolios();

  return (
    <div className="grid grid-cols-1 gap-4 px-0 pt-4 md:grid-cols-2 lg:grid-cols-3 lg:px-4">
      {portfolios.slice(0, 3).map(({ id, instagramURL }) => (
        <PortfolioPost key={id} url={instagramURL} />
      ))}
    </div>
  );
}
