// "use client"

// import * as React from "react"
// import * as TabsPrimitive from "@radix-ui/react-tabs"

// import { cn } from "@/lib/utils"

// function Tabs({
//   className,
//   ...props
// }: React.ComponentProps<typeof TabsPrimitive.Root>) {
//   return (
//     <TabsPrimitive.Root
//       data-slot="tabs"
//       className={cn("flex flex-col gap-2", className)}
//       {...props}
//     />
//   )
// }

// function TabsList({
//   className,
//   ...props
// }: React.ComponentProps<typeof TabsPrimitive.List>) {
//   return (
//     <TabsPrimitive.List
//       data-slot="tabs-list"
//       className={cn(
//         "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function TabsTrigger({
//   className,
//   ...props
// }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
//   return (
//     <TabsPrimitive.Trigger
//       data-slot="tabs-trigger"
//       className={cn(
//         "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function TabsContent({
//   className,
//   ...props
// }: React.ComponentProps<typeof TabsPrimitive.Content>) {
//   return (
//     <TabsPrimitive.Content
//       data-slot="tabs-content"
//       className={cn("flex-1 outline-none", className)}
//       {...props}
//     />
//   )
// }

// export { Tabs, TabsList, TabsTrigger, TabsContent }
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

// ---------- Context to share variant ----------
const TabsVariantContext = React.createContext<"horizontal" | "vertical">(
  "horizontal"
);

const Tabs = TabsPrimitive.Root;

type TabsListProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.List
> & {
  variant?: "horizontal" | "vertical";
};

const TabsList = ({
  ref,
  className,
  variant = "horizontal",
  ...props
}: TabsListProps & {
  ref: React.RefObject<React.ElementRef<typeof TabsPrimitive.List>>;
}) => {
  const baseStyles =
    variant === "vertical"
      ? "flex flex-col gap-1 p-2 min-w-[180px] bg-white dark:bg-[#0C0A09]"
      : "inline-flex h-10 items-center justify-center bg-muted p-1 text-muted-foreground w-full";

  return (
    <TabsVariantContext.Provider value={variant}>
      <TabsPrimitive.List
        ref={ref}
        className={cn(baseStyles, className)}
        {...props}
      />
    </TabsVariantContext.Provider>
  );
};
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  ref: React.RefObject<React.ElementRef<typeof TabsPrimitive.Trigger>>;
}) => {
  const variant = React.useContext(TabsVariantContext);

  const verticalStyles = cn(
    "w-full px-4 py-2 text-sm text-left rounded-md cursor-pointer transition-colors font-medium hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:font-semibold"
  );

  const horizontalStyles = cn(
    "w-fit px-4 py-2 text-sm text-left rounded-md cursor-pointer transition-colors font-medium data-[state=active]:font-semibold data-[state=active]:border data-[state=active]:px-6 data-[state=active]:rounded-full  hover:rounded-full text-black"
  );

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        variant === "vertical" ? verticalStyles : horizontalStyles,
        className
      )}
      {...props}
    />
  );
};
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
  ref: React.RefObject<React.ElementRef<typeof TabsPrimitive.Content>>;
}) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
