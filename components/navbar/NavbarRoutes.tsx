"use client";
import { cn } from "@/libs/utils";
import { Role } from "@prisma/client";
import { NavbarRoutesProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "خانه",
    path: "/blog",
  },
  {
    label: "بلاگ",
    path: "/blogPost",
  },
];
const NavbarRoutes = ({ session, isVertical = false }: NavbarRoutesProps) => {
  const pathname = usePathname();
  console.log(session);
  console.log(pathname);
  console.log("Session data:", session);
  console.log("User role:", session.user?.role);
  return (
    <div
      className={cn("flex items-center justify-start gap-2", {
        "flex-col": isVertical,
      })}
    >
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.path}
          className={cn("flex justify-center items-center py-1 text-lg w-14", {
            "rounded-md text-white bg-black": pathname === route.path,
          })}
        >
          {route.label}
        </Link>
      ))}
      {session.user?.role === Role.ADMIN && (
        <Link
          href="/admin"
          className={cn("flex justify-center items-center py-1 text-lg w-14", {
            "rounded-md text-white bg-black": pathname === "/admin",
          })}
        >
          ادمین
        </Link>
      )}
    </div>
  );
};

export default NavbarRoutes;
