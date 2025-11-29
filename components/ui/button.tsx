"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      asChild,
      ...props
    },
    ref
  ): React.ReactElement => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-primary-500 text-white hover:bg-primary-600 shadow-soft hover:shadow-soft-lg",
      secondary:
        "bg-accent-emerald text-white hover:bg-accent-teal shadow-soft hover:shadow-soft-lg",
      outline:
        "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20",
      ghost:
        "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const buttonClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    // If asChild is true, clone the child element and apply styles
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        className: cn(buttonClassName, child.props.className),
        ref,
      } as any);
    }

    // Exclude conflicting props for motion.button
    const { onDrag, onDragEnd, onDragStart, onAnimationStart, onAnimationEnd, ...motionProps } = props;

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={buttonClassName}
        {...(motionProps as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };

