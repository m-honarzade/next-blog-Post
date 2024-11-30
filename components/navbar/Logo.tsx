import { cn } from "@/libs/utils";
import logo from "@/public/blog.png";
import { LogoProps } from "@/types";
import Image from "next/image";
const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("relative size-10", className)}>
      <Image src={logo} alt="blog-logo" fill sizes="100vw" />
    </div>
  );
};

export default Logo;
