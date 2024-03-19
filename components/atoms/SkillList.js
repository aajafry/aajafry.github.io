import Paragraph from "./Paragraph";

const innerListDivClass =
  "text-[2rem] px-6 py-8 mb-2 border-2 rounded-full hover:border-rose-500 shadow hover:shadow-lg";

export default function SkillList({ itemName, icon, classes }) {
  return (
    <li className={classes}>
      {icon && <div className={innerListDivClass}>{icon}</div>}
      <Paragraph>{itemName}</Paragraph>
    </li>
  );
}
