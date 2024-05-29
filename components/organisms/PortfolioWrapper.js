import PortfolioCard from "./PortfolioCard";

export default function PortfolioWrapper({ portfolioes }) {
  return (
    <div className="projects-section-wrapper mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {portfolioes.map((item, index) => (
        <PortfolioCard
          key={index}
          category={item.category}
          name={item.name.toUpperCase()}
          thumnilSrc={item.featureImage}
          viewSource={item.live}
          codeSource={item.github}
          detailsSource={`portfolioes/${item.name.toLowerCase()}`}
          transitionDuration={item.transitionDuration}
        />
      ))}
    </div>
  );
}
