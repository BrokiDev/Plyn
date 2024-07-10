import { useMutation } from "@tanstack/react-query";
import baseQuery from "../../baseQuery";


interface Response {
    status?: string;
    message?: string;
}

export const verifyEmailUser = async (token:string):Promise<Response> => {
    return baseQuery<Response>({ url: `${import.meta.env.BASE_URL}${`auth/verify-email/${token}`}`, method: 'PATCH',});
}

export const useVerifyEmail = () => {
  return useMutation({mutationKey: ['verifyEmail'], mutationFn: verifyEmailUser});
}