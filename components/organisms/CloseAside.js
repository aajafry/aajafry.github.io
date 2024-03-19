import NavigatorLinks from "../molecules/NavigatorLists";

export default function CloseAside() {
  return (
    <aside className="sidebar fixed left-[2%] top-0 z-20 flex items-center overflow-hidden h-screen transition duration-200 ease-in-out">
      <div className="iconic-site-navigator-wrapper text-lg border border-current rounded-xl px-2 py-4">
        <NavigatorLinks withLabel={false} />
      </div>
    </aside>
  );
}
