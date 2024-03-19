import Heading from "../atoms/Heading";
export default function BorderedSubheading({ classes, label }) {
  return (
    <div className={classes}>
      <Heading
        type="h4"
        label={label}
        classes="capitalize text-lg tracking-wide font-light"
      />
      <span className="block opacity-60 border-2 border-rose-500"></span>
    </div>
  );
}
