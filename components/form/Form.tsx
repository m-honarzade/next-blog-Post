"use client";
import { FormProps } from "@/types";

const Form = ({ children, action, className }: FormProps) => {
  return (
    <>
      <form className={className} action={action}>
        {children}
      </form>
    </>
  );
};

export default Form;
