import PortfolioTemplate from "@/components/templates/PortfolioTemplate";

export default function Portfolio({ params }) {
  return (
    <section className="content h-screen overflow-y-scroll grow px-20 py-8">
      <PortfolioTemplate params={params.slug} />
    </section>
  );
}
