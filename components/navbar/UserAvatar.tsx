import Link from "next/link";
import { UserAvatarProps } from "@/types";
import { prisma } from "@/libs/prisma";
import User from "./User";

const UserAvatar = async ({ session }: UserAvatarProps) => {
  if (!session || !session.user) {
    return (
      <div className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800">
        <Link href={"/register"}>ورود/ثبت نام</Link>
      </div>
    );
  }
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: session.userId,
  //   },
  // });
  // console.log(user?.name);
  return <User name={session.user?.name as string} />;
};

export default UserAvatar;
