import {
  FaFingerprint,
  FaHome,
  FaLayerGroup,
  FaPaperPlane,
  FaShapes,
} from "react-icons/fa";
import NavigatorList from "../atoms/NavigatorList";

const ListClasses =
  "px-2 py-2 bg-slate-200 dark:bg-slate-700 rounded-md tracking-wide";

export default function NavigatorLists({ withLabel }) {
  return (
    <ul
      className={`${
        !withLabel && "gap-4"
      } flex flex-col gap-2 `}
    >
      <NavigatorList href="/" classes={`${withLabel && ListClasses}`}>
        <FaHome className={`${withLabel && "text-rose-500"}`} />
        {withLabel && <span>home</span>}
      </NavigatorList>
      <NavigatorList href="/bio" classes={`${withLabel && ListClasses}`}>
        <FaFingerprint className={`${withLabel && "text-rose-500"}`} />
        {withLabel && <span>bio</span>}
      </NavigatorList>

      <NavigatorList
        href="/portfolioes"
        classes={`${withLabel && ListClasses}`}
      >
        <FaLayerGroup className={`${withLabel && "text-rose-500"}`} />
        {withLabel && <span>portfolioes</span>}
      </NavigatorList>

      <NavigatorList href="/expertise" classes={`${withLabel && ListClasses}`}>
        <FaShapes className={`${withLabel && "text-rose-500"}`} />
        {withLabel && <span>expertise</span>}
      </NavigatorList>

      <NavigatorList href="/contracts" classes={`${withLabel && ListClasses}`}>
        <FaPaperPlane className={`${withLabel && "text-rose-500"}`} />
        {withLabel && <span>contracts</span>}
      </NavigatorList>
    </ul>
  );
}
