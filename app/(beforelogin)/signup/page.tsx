"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormState } from "react-dom";
import { signUp } from "./actions";
import {
  PASSWORD_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
} from "@/types/constants";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const { push } = useRouter();
  const [state, dispatch] = useFormState(signUp, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">회원가입을 해주세요!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          required
          minLength={USERNAME_MIN_LENGTH}
          maxLength={USERNAME_MAX_LENGTH}
          errors={state?.fieldErrors.username}
        />
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
        <Input
          name="confirm_password"
          type="password"
          placeholder="ConfirmPassword"
          required
          errors={state?.fieldErrors.confirm_password}
        />
        <Button text="회원가입" />
      </form>
      <div className="text-center text-sm">
        이미 아이디가 없으신가요?{" "}
        <span
          className="font-bold text-sky-500 cursor-pointer hover:underline hover:text-sky-300 transition"
          onClick={() => push("/signin")}
        >
          로그인
        </span>{" "}
        하러 가기
      </div>
    </div>
  );
};

export default SignUp;
