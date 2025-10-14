import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Package,
  ShoppingCart,
  Users,
  Star,
  Settings,
} from "lucide-react";

const links = [
  { name: "Dashboard", icon: LayoutGrid, path: "/" },
  { name: "Products", icon: Package, path: "/products" },
  { name: "Orders", icon: ShoppingCart, path: "/orders" },
  { name: "Customers", icon: Users, path: "/customers" },
  { name: "Reviews", icon: Star, path: "/reviews" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r bg-white flex flex-col p-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <img src="../../public/header.png" alt="Admin Logo" className="" />
      </div>

      {/* Links */}
      <nav className="flex flex-col gap-4 mt-8">
        {links.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <Icon className="size-4.5" />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
