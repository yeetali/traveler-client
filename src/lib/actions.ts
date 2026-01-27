"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async () => {
  const cookieStore = cookies();
  (await cookieStore).delete("access_token");
  redirect("/login");
};

export const getToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");
  if (!token) throw new Error("No access token");
  return token.value;
};
