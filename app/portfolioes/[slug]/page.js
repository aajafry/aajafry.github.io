import PortfolioTemplate from "@/components/templates/PortfolioTemplate";
import { portfolioes } from "@/public/data/portfolioes";

export function generateStaticParams() {
  return portfolioes?.categories
    ?.flatMap((category) => category?.items)
    .map((item) => ({
      slug: item.name.toLocaleLowerCase(),
    }));
}

export default function Portfolio({ params }) {
  const { slug } = params;

  return (
    <section className="content h-screen overflow-y-scroll grow px-20 py-8">
      <PortfolioTemplate params={slug} />
    </section>
  );
}
