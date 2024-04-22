import { useQuery } from '@tanstack/react-query';


export const useGetData = (option:string) => {
   const response =  useQuery({  queryKey: ['data'], queryFn: async () => {
      const dataGet = await fetch(`${import.meta.env.VITE_BASE_API_URL}${option}`)
      return dataGet.json();
   }});

   return { data: response.data, isLoading: response.isLoading};
};