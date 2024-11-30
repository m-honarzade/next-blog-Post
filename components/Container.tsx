import { cn } from "@/libs/utils";
import { ContainerProps } from "@/types/index";

const Container = ({ children, className, isHeightFull }: ContainerProps) => {
  return (
    <div
      className={cn("max-w-7xl mx-auto px-5 md:px-3", className, {
        "h-full": isHeightFull,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
