import axios from "axios";
import { getRefresh } from "./getRefresh";
export const API = axios.create({
  baseURL: "baseurl",
  withCredentials: true,
});
API.interceptors.request.use(getRefresh);
