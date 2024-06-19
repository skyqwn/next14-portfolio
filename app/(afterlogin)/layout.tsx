import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <div className="flex-1 ">
        <Header>{children}</Header>
      </div>
    </div>
  );
}
