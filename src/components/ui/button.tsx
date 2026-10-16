import { Button as BaseButton } from "@base-ui/react/button"
import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-primary",
      primary: "btn-primary",
      destructive: "btn-danger",
      danger: "btn-danger",
      outline: "btn-secondary",
      secondary: "btn-secondary",
      ghost: "btn-quiet",
      quiet: "btn-quiet",
      link: "text-[var(--forest)] underline-offset-4 hover:underline",
    },
    size: {
      default: "min-h-9 px-4 py-2",
      sm: "!min-h-8 px-3 text-xs",
      lg: "!min-h-10 px-8",
      icon: "!h-9 !min-h-9 !w-9 !px-0",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
})

export type ButtonProps = ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants>

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
