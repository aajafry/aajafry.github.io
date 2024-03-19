import BorderedSubheading from "../molecules/BorderedSubheading";
import SoftSkillLists from "../molecules/SoftSkillLists";

export default function SoftSkillWrapper() {
  return (
    <div className="soft-skill-wrapper w-1/2 p-4">
      <div className="skill-heading-wrapper">
        <BorderedSubheading
          label="Soft Skills"
          classes="text-2xl font-bold mb-4"
        />
      </div>
      <div className="skill-list-wrapper">
        <SoftSkillLists />
      </div>
    </div>
  );
}
