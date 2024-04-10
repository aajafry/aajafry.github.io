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
        <span className="typed-cursor typed  text-rose-600 font-bold capitalize ">
          <TypeWriterEffect />
        </span>
      </div>
      <Button
        type="button"
        label="hire me"
        href="/"
        classes="hireBtn backdrop-blur bg-slate-800 bg-opacity-50 text-rose-500 border border-rose-500 text-lg font-light px-4 py-3 rounded outline-none capitalize tracking-wider text-nowrap hover:bg-rose-500 dark:hover:bg-rose-500 hover:bg-opacity-50 dark:hover:bg-opacity-50 hover:text-neutral-300 dark:hover:text-neutral-300 transition duration-300 ease-linear"
      />
    </div>
  );
}
