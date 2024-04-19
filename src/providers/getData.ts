import { useQuery } from '@tanstack/react-query';


export const useGetData = (option:string) => {
   const response =  useQuery({  queryKey: ['data'], queryFn: () => fetch(`${import.meta.env.VITE_BASE_API_URL}${option}`).then((res) => res.json())});

   return { data: response.data, isLoading: response.isLoading};
};