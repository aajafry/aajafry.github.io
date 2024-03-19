import BorderedSubheading from "../molecules/BorderedSubheading";
import WorkingSkillLists from "../molecules/WorkingSkillLists";

export default function WorkingSkillWrapper() {
  return (
    <div className="working-skill-wrapper w-1/2 p-4">
      <div className="skill-heading-wrapper">
        <BorderedSubheading
          label="working Skills"
          classes="text-2xl font-bold mb-4"
        />
      </div>
      <div className="skill-list-wrapper">
        <WorkingSkillLists />
      </div>
    </div>
  );
}
