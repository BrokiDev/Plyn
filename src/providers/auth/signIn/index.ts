import { useMutation } from "@tanstack/react-query";
import baseQuery from "../../sendData";

interface LoginResponse {
  status?: string;
  message?: string;
  data?: {
    email: string;
  };
}

export const loginUser = async (params: object): Promise<LoginResponse> => {
  return baseQuery<LoginResponse>({
    url: `${import.meta.env.BASE_URL}${"auth/sign-in"}`,
    method: "POST",
    body: params,
  });
};

export const useSignIn = () => {
  return useMutation({ mutationKey: ["signIn"], mutationFn: loginUser });
};
