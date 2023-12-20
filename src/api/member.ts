import { API } from "../utils/libs";
import { MemberController } from "../utils/libs/requestUrls";
import { toast } from "react-toastify";

export const signup = async (email: string, password: string) => {
  try {
    await API.post(MemberController.signup, {
      password,
      email,
    });
    return toast.success("회원가입이 되었습니다");
  } catch (e: any) {
    if (e.message === "Request failed with status code 400") {
      toast.warning("회원가입에 실패하였습니다.");
    }
    return false;
  }
};
