"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormState } from "react-dom";
import { PASSWORD_MIN_LENGTH } from "@/types/constants";
import { useRouter } from "next/navigation";
import { signIn } from "../signin/actions";
import SignModalButton from "./SignModalButton";

const SigninModal = () => {
  const [state, dispatch] = useFormState(signIn, null);
  const { push } = useRouter();

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="flex flex-col gap-10 py-8 px-6  bg-black w-[700px]  h-[550px] items-center justify-center relative">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">안녕하세요!</h1>
          <h2 className="text-xl">로그인을 해주세요!</h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-3">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            errors={state?.fieldErrors.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            minLength={PASSWORD_MIN_LENGTH}
            errors={state?.fieldErrors.password}
          />
          <Button text="로그인" />
        </form>
        <SignModalButton />
        <div className="text-center text-sm">
          아이디가 없으신가요?{" "}
          <span
            className="font-bold text-sky-500 cursor-pointer hover:underline hover:text-sky-300 transition"
            onClick={() => push("/signup")}
          >
            회원가입
          </span>{" "}
          하러 가기
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
