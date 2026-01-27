"use server";

import { authApi } from "@/lib/api";
import { loginSchema } from "@/lib/schemas/auth.schemas";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (
  prevState: { errors?: object; error?: string } | null,
  formData: FormData,
) => {
  try {
    const { data, success, error } = loginSchema.safeParse(
      Object.fromEntries(formData),
    );

    if (!success) return { errors: error.flatten().fieldErrors };
    const response = await authApi.authControllerLogin(data);
    const { access_token } = response.data as unknown as {
      access_token: string;
    };
    const cookieStore = await cookies();
    cookieStore.set("access_token", access_token);
  } catch (error) {
    if (
      error instanceof AxiosError &&
      error.response?.data.statusCode === 401
    ) {
      return { error: "Incorrect credentials" };
    }
    return { error: "Something went wrong" };
  }
  redirect("/");
};
