import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:   "bg-black text-white hover:bg-neutral-800 focus-visible:ring-black",
        brand:     "bg-[#BDDE3B] text-black hover:brightness-95 focus-visible:ring-[#BDDE3B]",
        secondary: "bg-[hsl(0_0%_95%)] text-black hover:bg-neutral-200 focus-visible:ring-neutral-400",
        ghost:     "bg-transparent text-black hover:bg-neutral-100 focus-visible:ring-neutral-400",
        danger:    "bg-[#EB9E9E] text-black hover:brightness-95 focus-visible:ring-[#EB9E9E]",
        outline:   "border border-black bg-transparent text-black hover:bg-neutral-100 focus-visible:ring-black",
      },
      size: {
        sm:   "h-8  px-3 text-sm",
        md:   "h-10 px-4 text-sm",
        lg:   "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
