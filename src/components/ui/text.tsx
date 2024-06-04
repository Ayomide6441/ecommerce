import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const textVariants = cva("font-inter", {
  variants: {
    variant: {
      "heading-1": "text-[40px] font-semibold leading-[150%]",
      "heading-2": "text-[32px] font-semibold leading-[auto]",
      "heading-3": "text-[24px] font-bold leading-[auto]",
      "heading-4": "text-lg font-semibold leading-[auto]",
      "heading-5": "text-[16px] font-semibold leading-[auto]",
      "heading-6": "text-[14px] font-medium leading-[auto]",
      "body-1": "text-[14px] leading-[175%] font-normal",
      "body-2": "text-[14px] leading-[175%] font-medium",
      "label-1": "text-[12px] leading-[24px] font-medium",
      "label-2": "text-[12px] leading-[24px] font-medium uppercase",
    },
  },
  defaultVariants: {
    variant: "body-1",
  },
});

export interface TextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      // @ts-expect-error
      <Comp
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export { Text, textVariants };
