export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://nest-shapers-back-end.vercel.app/api/v1"
  );
};
