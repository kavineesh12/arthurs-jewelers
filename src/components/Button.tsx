import type { ReactNode } from "react";
import arrowRightWhite from "../assets/imgVector.svg";
import arrowRightNavy from "../assets/imgVector1.svg";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "normal" | "small";
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  size = "normal",
  showIcon = variant === "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const base =
    "inline-flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200";
  const sizing = size === "small" ? "px-4 py-1" : "px-4 py-2";
  const look = isPrimary
    ? "bg-main-01 text-white hover:bg-main-01/90"
    : "bg-white border border-main-01 text-main-01 hover:bg-main-01 hover:text-white";
  const text = size === "small" ? "text-sm" : "text-[17px]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${sizing} ${look} font-body font-semibold tracking-[0.1px] whitespace-nowrap ${text} ${className}`}
    >
      <span>{children}</span>
      {showIcon && (
        <img
          src={isPrimary ? arrowRightWhite : arrowRightNavy}
          alt=""
          className={size === "small" ? "size-4" : "size-6"}
        />
      )}
    </button>
  );
}
