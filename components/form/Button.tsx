"use client";
import { ButtonProps } from "@/types";
import { useFormStatus } from "react-dom";

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,

  ...props
}: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type={type}
      onClick={onClick}
      className={`${bgColor} text-white px-7 py-2 rounded-md hover:bg-gray-800 disabled:bg-gray-400`}
    >
      {text}
    </button>
  );
};

export default Button;
