/* eslint-disable @typescript-eslint/no-explicit-any */

export interface BaseQueryParams {
  url: string;
  method?: string;
  body?: any;
  headers?: Record<string, string>;
}

const baseQuery = async <T>({ url, method = 'GET', body, headers = {} }: BaseQueryParams): Promise<T> => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
    credentials: 'include',
  });
  return response.json();
};

export default baseQuery;
