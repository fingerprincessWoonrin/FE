import { InternalAxiosRequestConfig } from "axios";
import getToken from "./getToken";
export const getRefresh = async (config: InternalAxiosRequestConfig) => {
  if (typeof window !== "object" || !config.headers) return config;
  const { accessToken } = await getToken();
  if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
};
