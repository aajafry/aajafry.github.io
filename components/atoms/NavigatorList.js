import Link from "next/link";

export default function NavigatorList({ classes, href, children }) {
  return (
    <li
      className={`${classes} hover:text-rose-500 transition duration-200 ease-out hover:ease-in`}
    >
      <Link className="flex items-center gap-4" href={href ? href : "/"}>
        {children}
      </Link>
    </li>
  );
}
