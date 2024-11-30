"use client";
import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import { useActionState } from "react";
import { auth } from "@/actions/auth-actions";
import Link from "next/link";

const RegisterForm = ({ mode }: { mode: string }) => {
  const [formState, formAction] = useActionState<
    { errors: { [key: string]: string } },
    FormData
  >(auth.bind(null, mode), { errors: {} });

  return (
    <>
      <Form action={formAction} className="w-96 mx-auto flex flex-col gap-y-5">
        <h2 className="text-3xl font-bold">
          {" "}
          {mode === "login" ? "ورود به حساب کاربری" : "نام نویسی"}
        </h2>
        {/* <div className={`${mode === "login" ? "hidden" : ""}`}> */}
        <Input name="name" placeholder="نام" type="text" />
        {/* </div> */}
        <Input name="email" placeholder="ایمیل" type="email" />
        <Input name="password" placeholder="پسورد" type="password" />
        {formState.errors && (
          <ul className="text-red-300">
            {Object.keys(formState.errors).map((error) => (
              <li key={error}>{formState.errors[error]}</li>
            ))}
          </ul>
        )}

        <Button
          type="submit"
          text={mode === "login" ? "ورود" : "ایجاد حساب کاربری"}
          bgColor="bg-black"
        />
      </Form>
      <div className="mt-8">
        {mode === "login" && (
          <Link href="/register?mode=signup" className="hover:text-blue-600">
            <p className="text-center"> ایجاد حساب کاربری </p>
          </Link>
        )}
        {mode === "signup" && (
          <Link href="/register?mode=login" className="hover:text-blue-600">
            <p className="text-center">
              ثبت نام کرده اید؟ برای ورود کلیک کنید.
            </p>
          </Link>
        )}
      </div>
    </>
  );
};

export default RegisterForm;
