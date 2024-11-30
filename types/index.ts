import { Role } from "@prisma/client";
import { Session } from "lucia";
export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  isHeightFull?: boolean;
}

export interface FormProps {
  children: React.ReactNode;
  action: (
    formData: FormData
  ) => Promise<{ success: boolean; error?: string } | undefined>;
  className?: string;
}

export interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string | React.ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  bgColor?: string;
}
export interface Login {
  email: string;
  password: string;
}
export interface Register {
  name: string;
  email: string;
  password: string;
}

export interface UserProps {
  name: string;
}

export interface UserAvatarProps {
  session: {
    user: {
      id: string;
      name: string;
      email: string;
      role: Role;
    } | null;
    session: Session | null;
  };
}

export interface LogoProps {
  className?: string;
}

export interface NavbarRoutesProps {
  session: {
    user: {
      id: string;
      name: string;
      email: string;
      role: Role;
    } | null;
    session: Session | null;
  };
  isVertical?: boolean;
}

export interface MobileNavbarMenuProps {
  session: Session | null;
}

export interface DeletePostBtnProps {
  postId: number;
}
