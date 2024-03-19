import Heading from "../atoms/Heading";
import BorderedSubheading from "../molecules/BorderedSubheading";

export default function PageHeading({ label, subLabel, classes }) {
  return (
    <div className={classes}>
      <Heading
        type="h2"
        label={label}
        classes="uppercase text-6xl leading-relaxed tracking-widest opacity-10"
      />
      <BorderedSubheading label={subLabel} classes="absolute" />
    </div>
  );
}
