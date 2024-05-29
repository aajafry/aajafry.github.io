// import Paragraph from "@/components/atoms/Paragraph";
import BorderedSubheading from "@/components/molecules/BorderedSubheading";

export default function PortfolioDescription({ description }) {
  return (
    <div className="w-full lg:w-3/5 p-4">
      <BorderedSubheading label="Description" />

      {/* <Paragraph classes="mt-4 text-neutral-800 dark:text-neutral-300"></Paragraph> */}
      <div
        className="mt-4 text-neutral-800 dark:text-neutral-300"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
}
