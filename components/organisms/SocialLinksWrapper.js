import Heading from "../atoms/Heading";
import SocialLinks from "../molecules/SocialLinks";

export default function SocialLinksWrapper({ classes }) {
  return (
    <div className={`${classes} social-link-wrapper uppercase my-8`}>
      <Heading
        type="h3"
        label="find with me"
        classes="my-6 tracking-wider text-xl"
      />
      <SocialLinks classes="text-xl flex flex-wrap gap-4" />
    </div>
  );
}
