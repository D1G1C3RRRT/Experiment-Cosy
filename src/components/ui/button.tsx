import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl border-2 border-charcoal px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-terracotta text-cream shadow-brutal hover:bg-rust",
        secondary: "bg-cream dark:bg-slate-card text-foreground shadow-brutal-sm",
        ghost: "border-transparent bg-transparent shadow-none hover:bg-charcoal/5 dark:hover:bg-white/10"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, type = "button", ...props },
  ref
) {
  return <button className={cn(buttonVariants({ variant }), className)} ref={ref} type={type} {...props} />;
});

export { Button, buttonVariants };
