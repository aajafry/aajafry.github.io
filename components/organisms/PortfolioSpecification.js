import BorderedSubheading from "@/components/molecules/BorderedSubheading";
import PortfolioSpecificationLists from "../molecules/PortfolioSpecificationLists";

const listClasses = "overflow-hidden break-all";

export default function PortfolioSpecification({
  name,
  view,
  code,
  userEmail,
  userPassword,
  specification,
}) {
  return (
    <div className="w-2/5 p-4 ">
      <BorderedSubheading label="Specification" />

      <PortfolioSpecificationLists
        name={name}
        view={view}
        code={code}
        userEmail={userEmail}
        userPassword={userPassword}
        specification={specification}
      />
    </div>
  );
}
