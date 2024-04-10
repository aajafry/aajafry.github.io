import Link from "next/link";
import Paragraph from "./Paragraph";

const listClasses = "overflow-hidden break-all";

export default function PortfolioSpecificationList({
  label,
  description,
  href,
}) {
  return (
    <li className={listClasses}>
      <strong>{label} :</strong>{" "}
      {href ? (
        <Link href={href} className="text-neutral-800 dark:text-neutral-300">
          {" "}
          {description}
        </Link>
      ) : (
        <Paragraph classes="text-neutral-800 dark:text-neutral-300">
          {description}
        </Paragraph>
      )}
    </li>
  );
}
