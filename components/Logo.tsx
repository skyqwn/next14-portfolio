"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandSupabase } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

import IconButton from "./IconButton";

interface LogoProps {
  isInDrawer?: boolean;
  onClickClose?: () => void;
}

const Logo = ({ isInDrawer = false, onClickClose }: LogoProps) => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };

  const onClickMenu = () => {};

  return (
    <section className="flex gap-3 items-center">
      {isInDrawer ? (
        <IconButton
          onClick={onClickClose}
          icon={<IoCloseOutline size={30} />}
        />
      ) : (
        <IconButton
          onClick={onClickMenu}
          icon={<RxHamburgerMenu size={24} />}
        />
      )}
      <div
        onClick={onClickLogo}
        className="flex gap-1 cursor-pointer items-center"
      >
        <IconButton icon={<RiNextjsLine size={30} />} />
        <div>&</div>
        <IconButton icon={<TbBrandSupabase size={30} />} />
      </div>
    </section>
  );
};

export default Logo;
