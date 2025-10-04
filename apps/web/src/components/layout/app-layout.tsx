import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
