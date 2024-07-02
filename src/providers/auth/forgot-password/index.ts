import { useMutation } from "@tanstack/react-query";
import baseQuery from "../../baseQuery";

interface Response {
  status?: string;
  message?: string;
  data?: object;
}

const forgotPassword = async (params: object): Promise<Response> => {
  return baseQuery<Response>({
    url: `${import.meta.env.BASE_URL}${"auth/forgot-password"}`,
    method: "POST",
    body: params,
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationKey: ["forgotPassword"],
    mutationFn: forgotPassword,
  });
};
