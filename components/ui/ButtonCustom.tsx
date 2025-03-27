
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "accent" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "accent",
  size = "md",
  className,
  children,
  ...props
}) => {
  const getVariantClasses = (): string => {
    switch (variant) {
      case "accent":
        return "button-accent";
      case "ghost":
        return "button-ghost";
      case "link":
        return "bg-transparent text-primary-500 hover:text-primary-400 underline-offset-4 hover:underline p-0";
      default:
        return "button-accent";
    }
  };

  const getSizeClasses = (): string => {
    switch (size) {
      case "sm":
        return "text-small-medium px-4 py-2";
      case "md":
        return "text-base-medium px-6 py-3";
      case "lg":
        return "text-body-medium px-8 py-4";
      default:
        return "text-base-medium px-6 py-3";
    }
  };

  return (
    <button
      className={cn(
        "rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transform hover:-translate-y-1 active:translate-y-0 shadow-lg hover:shadow-xl hover:shadow-primary-500/20",
        getVariantClasses(),
        getSizeClasses(),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;