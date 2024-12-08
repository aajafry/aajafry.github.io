import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiDrizzle,
} from "react-icons/si";
import SkillList from "../atoms/SkillList";

const listClass = "skill-list-item text-center";
const innerListDivClass =
  "text-[2rem] px-6 py-8 mb-2 border-2 rounded-full hover:border-rose-500 shadow hover:shadow-lg";
const listIconClass = "scale-95 hover:scale-110";

export default function WorkingSkillLists() {
  return (
    <ul className="skill-list flex justify-center gap-6 flex-wrap">
      <SkillList
        itemName="HTML"
        classes={listClass}
        icon={<FaHtml5 className={listIconClass} />}
      />
      <SkillList
        itemName="CSS"
        classes={listClass}
        icon={<FaCss3 className={listIconClass} />}
      />
      <SkillList
        itemName="Javascript"
        classes={listClass}
        icon={<IoLogoJavascript className={listIconClass} />}
      />
      <SkillList
        itemName="React"
        classes={listClass}
        icon={<FaReact className={listIconClass} />}
      />
      <SkillList
        itemName="Redux"
        classes={listClass}
        icon={<SiRedux className={listIconClass} />}
      />
      <SkillList
        itemName="Node.js"
        classes={listClass}
        icon={<FaNodeJs className={listIconClass} />}
      />
      <SkillList
        itemName="Express.js"
        classes={listClass}
        icon={<SiExpress className={listIconClass} />}
      />
      <SkillList
        itemName="MongoDB"
        classes={listClass}
        icon={<SiMongodb className={listIconClass} />}
      />
      <SkillList
        itemName="Postgres"
        classes={listClass}
        icon={<BiLogoPostgresql className={listIconClass} />}
      />
      <SkillList
        itemName="Socket.IO"
        classes={listClass}
        icon={<SiSocketdotio className={listIconClass} />}
      />
      <SkillList
        itemName="Git"
        classes={listClass}
        icon={<FaGitAlt className={listIconClass} />}
      />
      <SkillList
        itemName="Tailwind css"
        classes={listClass}
        icon={<SiTailwindcss className={listIconClass} />}
      />
      <SkillList
        itemName="Bootstrap"
        classes={listClass}
        icon={<FaBootstrap className={listIconClass} />}
      />
      <SkillList
        itemName="MUI"
        classes={listClass}
        icon={<SiMui className={listIconClass} />}
      />
    </ul>
  );
}
