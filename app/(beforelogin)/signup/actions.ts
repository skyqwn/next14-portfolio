"use server";

import {
  ERROR_MSG,
  NICKNAME_REGEX,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
} from "@/types/constants";
import { z } from "zod";

const formSchema = z.object({
  username: z
    .string()
    .min(USERNAME_MIN_LENGTH, ERROR_MSG.username_min_length)
    .max(USERNAME_MAX_LENGTH, ERROR_MSG.username_max_length)
    .regex(NICKNAME_REGEX, ERROR_MSG.username_regex),
  email: z.string().email(),
  password: z.string().min(8),
  confirm_password: z.string().min(8),
});

export async function signUp(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
