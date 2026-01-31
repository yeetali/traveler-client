"use server";

import { getToken } from "@/lib/actions";
import { authApi, usersApi } from "@/lib/api";
import { profileSchema } from "@/lib/schemas/auth.schemas";
import { User } from "@/types/api";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getProfile = async () => {
  try {
    const token = await getToken();
    const { data } = (await authApi.authControllerProfile({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })) as { data: User };
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (
  _prevState: { errors?: object; error?: string } | null,
  formData: FormData,
) => {
  try {
    const token = await getToken();
    const { data, success, error } = profileSchema.safeParse({
      ...Object.fromEntries(formData),
      id: Number(formData.get("id")),
    });
    if (!success) return { errors: error.flatten().fieldErrors };
    const { id, ...userData } = data;
    await usersApi.usersControllerUpdate(id, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    revalidatePath("/profile");
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
      return {
        error: error.response?.data || "Something went wrong",
        state: Object.fromEntries(formData),
      };
    }

    return {
      error: "Something went wrong",
      state: Object.fromEntries(formData),
    };
  }
  redirect("/profile");
};
