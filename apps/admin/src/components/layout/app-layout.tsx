import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Sidebar from "./sidebar";

function AppLayout() {
  return (
    <div className="flex gap-0 w-full h-screen">
      <aside className="w-64 bg-W900 ">
        <Sidebar />
      </aside>
      <div className="flex-1 bg-[#F5F5F5]">
        <Nav />
        <main className="mt-10 px-32">
          <div className="container bg-white rounded-md">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
