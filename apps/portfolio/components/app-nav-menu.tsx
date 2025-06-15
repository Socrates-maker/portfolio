import { ModeToggle } from "@/components/mode-toggle";

import { NavigationMenu } from "@/components/ui/navigation-menu";

export function AppNavMenu() {
  return (
    <NavigationMenu className=" flex justify-between">
      <ModeToggle />
    </NavigationMenu>
  );
}
