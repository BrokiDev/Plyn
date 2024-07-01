import { useMutation } from "@tanstack/react-query";
import baseQuery from "../../sendData";


interface Response {
    status?: string;
    message?: string;
    data?:object;
}



export const logoutUser = async () => {
    return baseQuery<Response>({ url: `${import.meta.env.BASE_URL}${'auth/sign-out'}` });
}

export const useLogout = () => {
    return useMutation({mutationKey: ['logout'], mutationFn: logoutUser});
}