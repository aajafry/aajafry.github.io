import NavigatorLinks from "../molecules/NavigatorLists";

export default function CloseAside() {
  return (
    <aside className="sidebar fixed left-[2%] top-0 z-20 flex items-center overflow-hidden h-screen transition duration-200 ease-in-out">
      <div className="iconic-site-navigator-wrapper backdrop-blur bg-slate-800 bg-opacity-30 shadow text-lg border border-rose-500 rounded-xl px-2 py-4">
        <NavigatorLinks withLabel={false} />
      </div>
    </aside>
  );
}
