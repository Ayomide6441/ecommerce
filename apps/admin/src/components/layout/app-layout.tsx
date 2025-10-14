import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Sidebar from "./sidebar";

function AppLayout() {
  return (
    <div className="flex gap-0 w-full h-screen">
      <section className="w-64 bg-W900 ">
        <Sidebar />
      </section>
      <main className="flex-1 bg-[#F5F5F5]">
        <Nav />

        <div className="container mt-10 bg-white rounded-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
