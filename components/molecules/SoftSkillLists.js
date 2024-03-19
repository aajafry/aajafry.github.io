import SkillList from "../atoms/SkillList";

const listClass =
  "skill-list-item capitalize px-3 py-4 border hover:border-red-500 rounded-md shadow hover:shadow-md";

export default function SoftSkillLists() {
  return (
    <ul className="skill-list flex gap-6 flex-wrap">
      <SkillList itemName="Communication" classes={listClass} />
      <SkillList itemName="Time Management" classes={listClass} />
      <SkillList itemName="Negotiation" classes={listClass} />
      <SkillList itemName="Quick Learner" classes={listClass} />
    </ul>
  );
}
