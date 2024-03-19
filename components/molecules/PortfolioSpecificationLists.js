import PortfolioSpecificationList from "../atoms/PortfolioSpecificationList";

const listClasses = "overflow-hidden break-all";

export default function PortfolioSpecificationLists({
  name,
  view,
  code,
  userEmail,
  userPassword,
  specification,
}) {
  return (
    <ul className="mt-4 wider">
      <PortfolioSpecificationList label="Project name" description={name} />
      <PortfolioSpecificationList
        label="view link"
        description={view}
        href={view}
      />
      <PortfolioSpecificationList
        label="source link"
        description={code}
        href={code}
      />

      {userEmail && (
        <PortfolioSpecificationList
          label="login email"
          description={userEmail}
        />
      )}
      {userPassword && (
        <PortfolioSpecificationList
          label="login password"
          description={userPassword}
        />
      )}
    </ul>
  );
}
