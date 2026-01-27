"use server";

import { authApi } from "@/lib/api";
import { registerSchema } from "@/lib/schemas/auth.schemas";
import { CreateUserDto } from "@/types/api";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const register = async (
  prevState: { errors?: object; error?: string } | null,
  formData: FormData,
) => {
  try {
    const { data, success, error } = registerSchema.safeParse(
      Object.fromEntries(formData),
    );

    if (!success)
      return {
        errors: error.flatten().fieldErrors,
        data: Object.fromEntries(formData) as Partial<CreateUserDto>,
      };
    const response = await authApi.authControllerRegister(data);
    const { access_token } = response.data as unknown as {
      access_token: string;
    };
    const cookieStore = await cookies();
    cookieStore.set("access_token", access_token);
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        error: "Email is taken",
        data: Object.fromEntries(formData) as Partial<CreateUserDto>,
      };
    }
    return {
      error: "Something went wrong",
      data: Object.fromEntries(formData) as Partial<CreateUserDto>,
    };
  }
  redirect("/");
};
