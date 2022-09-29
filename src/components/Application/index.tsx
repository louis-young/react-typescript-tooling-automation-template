export const Application = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold">
        {import.meta.env.VITE_APPLICATION_NAME}
      </h1>
    </main>
  );
};
