import { useMutation } from "@tanstack/react-query";

type Data = {
  email: string;
  password: string;
};

export const useSendData = (option:string) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['sendData'],
    mutationFn: (data:Data) =>
      fetch(`${import.meta.env.VITE_BASE_API_URL}${option}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
  });
  return { mutateAsync };
};