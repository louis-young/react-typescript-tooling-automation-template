import { Spacer } from "../Spacer";
import type { LabelProps } from "./types";

export const Label = ({ htmlFor, label, children }: LabelProps) => {
  return (
    <label htmlFor={htmlFor}>
      <span className="block font-medium">{label}</span>

      <Spacer size="small" />

      {children}
    </label>
  );
};
