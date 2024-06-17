"use client";

import { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiCompass } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { BsChatSquareDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navigator = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: "홈",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icon: <BsChatSquareDots size={24} />,
        label: "채팅",
        isActive: pathname === "/chats",
        href: "/chats",
      },
      {
        icon: <FiCompass size={24} />,
        label: "게시판",
        isActive: pathname === "/posts",
        href: "/posts",
      },
      {
        icon: <CgProfile size={24} />,
        label: "프로필",
        isActive: pathname === "/profile",
        href: "/profile",
      },
    ];
  }, [pathname]);

  console.log(pathname);

  return (
    <div>
      <section className="flex flex-col gap-8 p-6">
        {routes.map((route) => {
          return (
            <Link key={route.label} href={route.href}>
              <div
                className={cn(
                  "flex items-center gap-3 hover:bg-neutral-700 p-2 rounded-xl",
                  route.isActive && "bg-neutral-800"
                )}
              >
                <span>{route.icon}</span>
                <span>{route.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
      <section className="px-6">
        <div className="w-full h-[1px] bg-neutral-700" />
      </section>
      <section className="px-6">
        <div className="w-full h-[1px] bg-neutral-700" />
      </section>
    </div>
  );
};

export default Navigator;
