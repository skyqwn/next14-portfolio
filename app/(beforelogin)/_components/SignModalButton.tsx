import { IoMdClose } from "react-icons/io";

import React from "react";
import { useRouter } from "next/navigation";

const SignModalButton = () => {
  const router = useRouter();
  const onCloseClick = () => {
    router.back();
  };
  return (
    <button
      onClick={onCloseClick}
      className="absolute right-5 top-5 text-neutral-200 cursor-pointer z-50"
    >
      <IoMdClose className="size-10" />
    </button>
  );
};

export default SignModalButton;
