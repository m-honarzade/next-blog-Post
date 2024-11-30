import { Lucia, Session } from "lucia";
import { cache } from "react";
import { User } from "lucia";
import { cookies } from "next/headers";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { prisma } from "@/libs/prisma";
import { Role } from "@prisma/client";

const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      email: attributes.email,
      name: attributes.name,
      role: attributes.role,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DefaultUser;
  }
}

type DefaultUser = {
  email: string;
  name: string;
  role: Role;
};

export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get(lucia.sessionCookieName)?.value ?? null;

    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    const result = await lucia.validateSession(sessionId);

    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookieStore.set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookieStore.set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
    } catch {}
    return result;
  }
);
// Add this new function for middleware
// export async function validateRequestMiddleware(cookieString?: string | null) {
//   if (!cookieString) return { user: null, session: null };

//   const sessionId = lucia.readSessionCookie(cookieString);
//   if (!sessionId) return { user: null, session: null };

//   const { session, user } = await lucia.validateSession(sessionId);
//   return { user, session };
// }
