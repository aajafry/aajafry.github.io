import Footer from "@/components/atoms/Footer";
import PageHeading from "@/components/organisms/PageHeading";
import { portfolioes } from "@/public/data/portfolioes";
import PortfolioDescription from "../organisms/PortfolioDescription";
import PortfolioSpecification from "../organisms/PortfolioSpecification";

export default function PortfolioTemplate({ params }) {
  const portfolioItem = portfolioes.categories
    .flatMap((category) => category.items)
    .find((item) => item.name.toLocaleLowerCase() === params);

  return (
    <>
      <PageHeading
        label="Portfolio"
        subLabel="Featured Project"
        classes="section-heading-wrapper relative flex items-center justify-center my-12"
      />

      <div className="section-content-wrapper flex flex-col-reverse lg:flex-row gap-4">
        <PortfolioDescription description={portfolioItem.description} />
        <PortfolioSpecification
          name={portfolioItem?.name}
          view={portfolioItem?.live}
          code={portfolioItem?.github}
          specification={portfolioItem?.specification}
        />
      </div>
      <div className="border divide-zinc-800 dark:divide-zinc-300 dark:opacity-30  my-12"></div>
      <Footer />
    </>
  );
}
