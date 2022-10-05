export const buildEntireUrl = (endpoint: string) => {
  return new URL(endpoint, import.meta.env.VITE_API_BASE_URL).toString();
};
