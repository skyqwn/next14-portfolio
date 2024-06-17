"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandSupabase } from "react-icons/tb";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };

  const onClickMenu = () => {};

  return (
    <section className="flex gap-3 items-center">
      <IconButton onClick={onClickMenu} icon={<RxHamburgerMenu size={24} />} />
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
