import { useMutation } from "@tanstack/react-query";



export const useForgotPassword = (option:string) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['sendData'],
    mutationFn: async (email:string) => {
      try {
        const dataSend = await fetch(`${import.meta.env.VITE_BASE_API_URL}${option}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email}),
        })
        return dataSend.json();
        
      } catch (error) {
        console.error(error)
      }
    }

});
  return { mutateAsync };
};