"use server";

import { lucia } from "@/libs/auth";
import { hashUserPassword, verifyPassword } from "@/libs/hash";
import { prisma } from "@/libs/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Login } from "../types/index";

export async function signup(
  _prevState: { [key: string]: string } | undefined,
  formData: FormData
) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const errors: { [key: string]: string } = {};
    if (!name) {
      errors.name = "لطفا نام خود را وارد کنید!";
    }
    if (!email.includes("@")) {
      errors.email = "لطفا ایمیل معتبر وارد کنید!";
    }
    if (password.trim().length < 8) {
      errors.password = "لطفا پسورد معتبر با حداقل طول 8 کاراکتر وارد نمایید!";
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    //  CREATE USER IN DB
    // 1- Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        errors: {
          email: "ایمیل وارد شده از قبل وجود دارد.",
        },
      };
    }

    // 2- Hash password and create user
    const hashedPassword = hashUserPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role: "USER",
      },
    });

    if (!user) {
      return {
        errors: {
          error: "خطا در ایجاد کاربر",
        },
      };
    }
    // Create session
    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    (await cookies()).set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (error) {
    console.error("Registration error:", error);
    return {
      errors: {
        error: "خطا در فرآیند ثبت نام",
      },
    };
  }
  redirect("/blog");
}
//  LOGIN FUNCTION
export async function login(
  _prevState: { [key: string]: string } | undefined,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    return {
      errors: {
        email: "ایمیل وارد شده معتبر نیست. لطفا ایمیل صحیح وارد کنید..",
      },
    };
  }
  const isValidPassword = verifyPassword(existingUser.hashedPassword, password);
  if (!isValidPassword) {
    return {
      errors: {
        password: "پسورد وارد شده صحیح نمیباشد.",
      },
    };
  }
  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  redirect("/blog");
}
// SWITCH BETWEEN SIGNUP AND LOGIN ACTION BASED ON MODE
export async function auth(
  mode: string,
  _prevState: { [key: string]: string } | undefined,
  formData: FormData
) {
  if (mode === "login") {
    return login(_prevState, formData);
  }
  return signup(_prevState, formData);
}

// LOGOUT FUNCTION
export async function logout() {
  const cookieValue = (await cookies()).get(lucia.sessionCookieName)?.value;
  if (!cookieValue) return;

  const session = await lucia.validateSession(cookieValue);
  if (!session?.session) return;

  await lucia.invalidateSession(session.session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/");
}
