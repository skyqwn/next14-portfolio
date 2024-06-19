"use server";

import { z } from "zod";
import bcrypt from "bcrypt";

import db from "@/lib/db";
import {
  ERROR_MSG,
  NICKNAME_REGEX,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
} from "@/types/constants";
import { redirect } from "next/navigation";
import getSession from "@/lib/session";

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const checkUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

const checkEmail = async (email: string) => {
  const userEmail = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  return !Boolean(userEmail);
};

const formSchema = z
  .object({
    username: z
      .string()
      .toLowerCase()
      .trim()
      .min(USERNAME_MIN_LENGTH, ERROR_MSG.username_min_length)
      .max(USERNAME_MAX_LENGTH, ERROR_MSG.username_max_length)
      .regex(NICKNAME_REGEX, ERROR_MSG.username_regex),
    email: z.string().email().trim().toLowerCase(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, ERROR_MSG.password_min_length)
      .regex(PASSWORD_REGEX, ERROR_MSG.password_regex),
    confirm_password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, ERROR_MSG.password_min_length),
  })
  .superRefine(async ({ username }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: ERROR_MSG.check_unique_username,
        path: ["username"],
        fatal: true,
      });
      return z.NEVER;
    }
  })
  .superRefine(async ({ email }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: ERROR_MSG.check_unique_email,
        path: ["email"],
        fatal: true,
      });
      return z.NEVER;
    }
  })
  .refine(checkPasswords, {
    message: ERROR_MSG.check_password,
    path: ["confirm_password"],
  });

export async function signUp(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    const session = await getSession();
    session.id = user.id;
    await session.save();

    redirect("/profile");
  }
}
