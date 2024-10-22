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

function Header() {
  return (
    <div>
      <div className="bg-black text-center ">
        <Text className="text-white py-2">
          Get 25% OFF on your first order. Order Now
        </Text>
      </div>
      <div className="container">
        <div className="flex justify-between py-4">
          <img
            src="../Header.png"
            alt="Header logo"
            className="w-28 h-auto sm:w-auto"
          />
          <NavigationMenu className="hidden min-[1020px]:block">
            <NavigationMenuList className="gap-0 lg:gap-3">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent px-4 py-2 rounded-md focus:text-accent-foreground focus:outline-none"
                >
                  <Text variant="body-2" asChild>
                    <Link to="/">Home</Link>
                  </Text>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Text variant="body-2">Categories</Text>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent px-4 py-2 rounded-md focus:text-accent-foreground focus:outline-none"
                >
                  <Text variant="body-2" asChild>
                    <Link to="/">About</Link>
                  </Text>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent px-4 py-2 rounded-md focus:text-accent-foreground focus:outline-none"
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
