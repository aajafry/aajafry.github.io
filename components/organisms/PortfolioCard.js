import Link from "next/link";
import Img from "../atoms/Img";
import PortfolioInfoWrapper from "../molecules/PortfolioInfowrapper";

export default function PortfolioCard({
  category,
  name,
  thumnilSrc,
  viewSource,
  codeSource,
  detailsSource,
}) {
  return (
    <div className="project-wrapper h-fit bg-slate-800 dark:bg-slate-100 rounded-xl shadow hover:shadow-lg">
      <div className="inner relative">
        <div className="project-image-wrapper overflow-hidden rounded-xl relative">
          <Link href={detailsSource} className=" overflow-hidden relative">
            <Img
              isFixed={true}
              source={thumnilSrc}
              alt=""
              classes="w-full h-52 transition duration-500 linear masonryStyle"
            />
          </Link>
        </div>

        <PortfolioInfoWrapper
          category={category}
          name={name}
          detailsSource={detailsSource}
          viewSource={viewSource}
          codeSource={codeSource}
        />
      </div>
    </div>
  );
}
