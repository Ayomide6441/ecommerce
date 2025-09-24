import { Text } from "./text";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useCategories } from "@/Hooks/useCategories";

function ListItem({
  title,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props} className="p-4">
      <NavigationMenuLink asChild className="">
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function Header() {
  const { data: categories } = useCategories();
  return (
    <div>
      <div className="bg-black text-center ">
        <Text className="text-white py-2">
          Get 25% OFF on your first order. Order Now
        </Text>
      </div>
      <div className="container">
        <div className="flex justify-between py-4">
          <Link to="/">
            <img
              src="../Header.png"
              alt="Header logo"
              className="w-28 h-auto sm:w-auto"
            />
          </Link>
          <NavigationMenu className="hidden min-[1020px]:block ">
            <NavigationMenuList className="gap-0 lg:gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="transition opacity-75 hover:opacity-100"
                >
                  <Text variant="body-2" asChild>
                    <Link to="/">Home</Link>
                  </Text>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="transition opacity-75 hover:opacity-100 px-0 py-0 bg-transparent hover:bg-transparent focus:bg-transparent focus:outline-none focus:text-inherit disabled:pointer-events-none disabled:opacity-50">
                  <Text variant="body-2">Categories</Text>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:grid-cols-2 z-auto">
                    {categories?.map((category) => (
                      <ListItem
                        key={category.id}
                        title={category.name}
                        href={`/products?categories=${category.name}`}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="transition opacity-75 hover:opacity-100"
                >
                  <Text variant="body-2" asChild>
                    <Link to="/">About</Link>
                  </Text>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="transition opacity-75 hover:opacity-100"
                >
                  <Text variant="body-2" asChild>
                    <Link to="/">Contact</Link>
                  </Text>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-3 items-center">
            <label htmlFor="search" className="relative">
              <div className="sm:absolute sm:top-2 sm:bottom-0 sm:left-2">
                <img src="../Search.svg" alt="" className="max-w-10" />
              </div>
              <Input
                id="search"
                type="text"
                placeholder="Search products"
                className="pl-10 hidden sm:block"
              />
            </label>
            <Link to="/cart">
              <img src="../Cart.svg" alt="" className="h-7" />
            </Link>
            <Link to="/account">
              <img src="../User.svg" alt="" className="h-7" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
