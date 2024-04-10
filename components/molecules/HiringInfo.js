import Heading from "../atoms/Heading";
import IconicContractInfo from "../atoms/IconicContractInfo";
import Paragraph from "../atoms/Paragraph";

export default function HiringInfo({ isShowingParagraph = true, classes }) {
  return (
    <div className={classes}>
      <Heading type="h3" label="AL ABED JAFRY" />
      {isShowingParagraph && (
        <Paragraph classes="text-neutral-800 dark:text-neutral-300">
          I am available for freelance work. Connect with me via and call in to
          my account.
        </Paragraph>
      )}
      <IconicContractInfo icon="mail" />
      <IconicContractInfo icon="phone" />
    </div>
  );
}
