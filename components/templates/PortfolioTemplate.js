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

      <div className="section-content-wrapper flex gap-4">
        <PortfolioDescription description={portfolioItem.description} />
        <PortfolioSpecification
          name={portfolioItem?.name}
          view={portfolioItem?.live}
          code={portfolioItem?.github}
          userEmail={portfolioItem?.userEmail}
          userPassword={portfolioItem?.userPassword}
          specification={portfolioItem?.specification}
        />
      </div>
      <Footer />
    </>
  );
}
