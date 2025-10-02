// import * as React from "react"
// import * as TabsPrimitive from "@radix-ui/react-tabs"

// import { cn } from "@/lib/utils"

// const Tabs = TabsPrimitive.Root

// const TabsList = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.List>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
// >(({ className, ...props }, ref) => (
//   <TabsPrimitive.List
//     ref={ref}
//     className={cn(
//       "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
//       className
//     )}
//     {...props}
//   />
// ))
// TabsList.displayName = TabsPrimitive.List.displayName

// const TabsTrigger = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.Trigger>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
// >(({ className, ...props }, ref) => (
//   <TabsPrimitive.Trigger
//     ref={ref}
//     className={cn(
//       "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs",
//       className
//     )}
//     {...props}
//   />
// ))
// TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

// const TabsContent = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
// >(({ className, ...props }, ref) => (
//   <TabsPrimitive.Content
//     ref={ref}
//     className={cn(
//       "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
//       className
//     )}
//     {...props}
//   />
// ))
// TabsContent.displayName = TabsPrimitive.Content.displayName

// export { Tabs, TabsList, TabsTrigger, TabsContent }
// Tabs.tsx

// import * as React from "react";
// import * as TabsPrimitive from "@radix-ui/react-tabs";
// import { cn } from "@/lib/utils";

// const Tabs = TabsPrimitive.Root;

// type TabsListProps = React.ComponentPropsWithoutRef<
//   typeof TabsPrimitive.List
// > & {
//   variant?: "horizontal" | "vertical";
// };

// const TabsList = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.List>,
//   TabsListProps
// >(({ className, variant = "horizontal", ...props }, ref) => {
//   const baseStyles =
//     variant === "vertical"
//       ? "flex flex-col gap-1 p-2 min-w-[180px] bg-white dark:bg-[#0C0A09]"
//       : "inline-flex h-10 items-center justify-center bg-muted  p-1 text-muted-foreground w-full";

//   return (
//     <TabsPrimitive.List
//       ref={ref}
//       className={cn(baseStyles, className)}
//       {...props}
//     />
//   );
// });
// TabsList.displayName = TabsPrimitive.List.displayName;

// const TabsTrigger = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.Trigger>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
// >(({ className, ...props }, ref) => (
//   <TabsPrimitive.Trigger
//     ref={ref}
//     className={cn(
//       "w-fit px-4 py-2 text-sm text-left rounded-md cursor-pointer transition-colors font-medium",
//       "hover:bg-accent hover:text-accent-foreground",
//       "data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:font-semibold",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// const TabsContent = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
// >(({ className, ...props }, ref) => (
//   <TabsPrimitive.Content
//     ref={ref}
//     className={cn(
//       "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsContent.displayName = TabsPrimitive.Content.displayName;

// export { Tabs, TabsList, TabsTrigger, TabsContent };
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

const TabsList = (
  {
    ref,
    className,
    variant = "horizontal",
    ...props
  }: TabsListProps & {
    ref: React.RefObject<React.ElementRef<typeof TabsPrimitive.List>>;
  }
) => {
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

const TabsTrigger = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    ref: React.RefObject<React.ElementRef<typeof TabsPrimitive.Trigger>>;
  }
) => {
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

const TabsContent = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
    ref: React.RefObject<React.ElementRef<typeof TabsPrimitive.Content>>;
  }
) => (<TabsPrimitive.Content
  ref={ref}
  className={cn(
    "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    className
  )}
  {...props}
/>);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
