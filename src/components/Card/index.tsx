import type { CardProps } from "./types";

export const Card = ({ children }: CardProps) => {
  return <div className="rounded-lg bg-gray-50 p-8">{children}</div>;
};
