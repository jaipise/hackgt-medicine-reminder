import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Outlet />
      <span className="absolute bottom-0 left-0 px-2 py-0.5">
        Team Lanky Legos @ HackGT 22
      </span>
    </div>
  );
}
