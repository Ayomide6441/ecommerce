import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Sidebar from "./sidebar";

function AppLayout() {
  return (
    <div className="flex gap-0 w-full min-h-screen">
      <aside className="w-64 bg-W900 h-screen sticky top-0">
        <Sidebar />
      </aside>
      <div className="flex-1 bg-[#F5F5F5]">
        <Nav />
        <main className="mt-10 px-32 rounded-md">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
