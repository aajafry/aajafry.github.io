import Link from "next/link";

export default function Button({ type, label, href, classes, onClick }) {
  return (
    <button
      type={type}
      className={`${classes}dark:bg-transparent border-rose-500`}
      onClick={onClick}
    >
      {href ? <Link href={href}>{label}</Link> : label}
    </button>
  );
}
