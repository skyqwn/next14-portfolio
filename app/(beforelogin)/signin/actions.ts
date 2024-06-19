"use server";
import { z } from "zod";
import bcrypt from "bcrypt";

import db from "@/lib/db";
import {
  ERROR_MSG,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from "@/types/constants";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const checkEamilExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user);
};

const formSchema = z.object({
  email: z
    .string()
    .email()
    .trim()
    .toLowerCase()
    .refine(checkEamilExists, ERROR_MSG.check_email_exists),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH, ERROR_MSG.password_min_length)
    .regex(PASSWORD_REGEX, ERROR_MSG.password_regex),
});

export async function signIn(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    const checkedPassword = await bcrypt.compare(
      result.data.password,
      user!.password ?? ""
    );
    if (checkedPassword) {
      const session = await getSession();
      session.id = user!.id;
      await session.save();

      redirect("/profile");
    } else {
      return {
        fieldErrors: {
          password: [ERROR_MSG.wrong_passowrd],
        },
      };
    }
  }
}
