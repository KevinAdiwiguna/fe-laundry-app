"use client";
import React from "react";

enum ButtonVariant {
  white = "white",
  purple = "purple",
  ghost = "ghost",
  none = "none",
}

interface ButtonProps {
  variant: keyof typeof ButtonVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ variant, children, onClick, icon, className }: ButtonProps) => {
  const getVariantClasses = (variant: keyof typeof ButtonVariant) => {
    switch (variant) {
      case "purple":
        return "bg-purple-700 text-white hover:bg-purple-800";
      case "white":
        return "bg-white text-purple-700 border border-purple-700 hover:bg-gray-100";
      case "ghost":
        return "bg-transparent text-purple-700 border border-transparent hover:bg-purple-50";
      case "none":
        return ""
      default:
        return "";
    }
  };

  return (
    <button
      className={`py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-x-2 ${getVariantClasses(variant)} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && icon}
    </button>
  );
};
