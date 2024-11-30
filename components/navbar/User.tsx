"use client";
import { UserProps } from "@/types";
import Button from "../form/Button";
import Form from "../form/Form";
import { logout } from "@/actions/auth-actions";

const User = ({ name }: UserProps) => {
  return (
    <div className="flex items-center justify-between gap-x-2">
      <div className="flex items-center justify-center border border-gray-300 rounded-full px-3 py-1">
        <span className="font-bold">{name}</span>
      </div>
      <Form action={logout}>
        <Button text="خروج" type="submit" bgColor="bg-black" />
      </Form>
    </div>
  );
};

export default User;
