/* eslint-disable react/no-unescaped-entities */
import TypeWriterEffect from "@/components/atoms/TypeWriterEffect";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

export default function HomeInfo({ classes }) {
  return (
    <div className={classes}>
      <Heading
        type="h2"
        label="hi there 👋,"
        classes="heading uppercase text-3xl tracking-wider"
      />
      <Heading
        type="h1"
        label="al abed jafry"
        classes="heading uppercase text-6xl tracking-widest"
      />
      <div className="typed-text text-2xl flex justify-center flex-wrap ">
        <Paragraph classes="static-text font-medium mr-1">I'm a </Paragraph>
        <span className="typed-cursor typed text-rose-600 font-light capitalize">
          <TypeWriterEffect />
        </span>
      </div>
      <Button
        type="button"
        label="hire me"
        href="/"
        classes="bg-black bg-opacity-50 text-rose-500 font-light rounded px-4 py-3 outline-none capitalize tracking-wider text-nowrap text-lg"
      />
    </div>
  );
}
