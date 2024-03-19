import Paragraph from "@/components/atoms/Paragraph";
import BorderedSubheading from "@/components/molecules/BorderedSubheading";

export default function PortfolioDescription({ description }) {
  return (
    <div className="w-3/5 p-4 ">
      <BorderedSubheading label="Description" />
      <Paragraph classes="mt-4">{description}</Paragraph>
    </div>
  );
}
