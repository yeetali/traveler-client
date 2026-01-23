import { AuthApi, Configuration } from "@/types/api";

const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL,
});

export const authApi = new AuthApi(config);
