import { Text } from "@ecommerce/ui/components/text";
import { LogOut } from "lucide-react";
function Nav() {
  return (
    <div className="px-24 py-8 flex justify-between items-center">
      <Text>Nav</Text>
      <LogOut />
    </div>
  );
}

export default Nav;
