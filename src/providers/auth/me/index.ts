import { useQuery } from "@tanstack/react-query";
import baseQuery from "../../baseQuery";

interface User {
    id: number;
    uuid: string;
    fName: string;
    lName: string;
    companyName: string | null;
    email: string;
    active: boolean;
    createdAt: Date;
    updateAt: Date | null;
    deleteAt: Date | null;
  }

  interface Response {
    status?: string;
    data?: User;
  
  }
  
const fetchUser = async (): Promise<Response> => {
    return baseQuery<Response>({ url: `${import.meta.env.BASE_URL}${'auth/me'}` });
};

export const useUser = () => {
    return useQuery({queryKey: ['user'], queryFn: fetchUser});
};
