import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className,
  ...rest
}) => {
  const buttonClasses = clsx(
    "px-4 py-2 cursor-pointer transition duration-200",
    {
      "bg-[var(--color-primary)]": variant === "primary",
      "bg-gray-500 ": variant === "secondary",
      "bg-red-500 ": variant === "danger",
      "bg-green-500 ": variant === "success",
      "text-sm px-3 py-1": size === "small",
      "text-base px-4 py-2": size === "medium",
      "text-lg px-5 py-3": size === "large",
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
