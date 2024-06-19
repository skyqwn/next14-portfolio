import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <Sidebar>{children}</Sidebar>;
}
