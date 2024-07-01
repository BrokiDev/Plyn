import { useMutation } from "@tanstack/react-query";
import baseQuery from "../../sendData";


interface Response {
    status?: string;
    message?: string;
    data?:object;
}

export const signUpUser = async (params: object):Promise<Response> => {
    return baseQuery<Response>({ url: `${import.meta.env.BASE_URL}${'auth/sign-up'}`, method: 'POST', body: params });
}

export const useSignUp = () => {
  return useMutation({mutationKey: ['signUp'], mutationFn: signUpUser});
}