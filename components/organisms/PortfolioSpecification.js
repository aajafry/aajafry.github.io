import BorderedSubheading from "@/components/molecules/BorderedSubheading";
import PortfolioSpecificationLists from "../molecules/PortfolioSpecificationLists";

const listClasses = "overflow-hidden break-all";

export default function PortfolioSpecification({
  name,
  view,
  code,
  specification,
}) {
  return (
    <div className="w-full lg:w-2/5 p-4 ">
      <BorderedSubheading label="Specification" />

      <PortfolioSpecificationLists
        name={name}
        view={view}
        code={code}
        specification={specification}
      />
    </div>
  );
}
