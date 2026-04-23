import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto w-full max-w-[1040px] px-4 sm:px-6 lg:px-0">{children}</div>;
}
