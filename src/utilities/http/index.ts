import type { PostParameters } from "./types";

export const post = async <TRequestResponse>({
  endpoint,
  payload,
}: PostParameters) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  try {
    const data: TRequestResponse = await response.json();

    return data;
  } catch (error) {
    return undefined;
  }
};
