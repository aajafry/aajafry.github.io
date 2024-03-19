import Link from "next/link";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
export default function PortfolioInfoWrapper({
  category,
  name,
  detailsSource,
  viewSource,
  codeSource,
}) {
  return (
    <div className="project-content-wrapper mt-4 p-6">
      <div className="flex justify-between px-4">
        <Link href={detailsSource}>
          <Heading type="h4" label={name} classes="capitalize" />
        </Link>
        <Heading
          type="h4"
          label={category}
          classes="text-rose-500 capitalize cursor-no-drop"
        />
      </div>
      <div className="project-cta-wrapper mt-4 flex justify-between gap-4">
        <Button
          label="view"
          href={viewSource}
          classes="rounded shadow hover:shadow-md text-rose-500 px-4 py-2 outline-none tracking-wide text-nowrap"
        />
        <Button
          label="code"
          href={codeSource}
          classes="rounded shadow hover:shadow-md text-rose-500 px-4 py-2 outline-none tracking-wide text-nowrap"
        />
      </div>
    </div>
  );
}
