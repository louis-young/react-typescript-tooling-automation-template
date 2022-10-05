import type { HTMLInputTypeAttribute } from "react";

export interface TextInputProps {
  ariaLabel: string;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  id: string;
  value: string;
  onValueChange: (newValue: string) => void;
  isDisabled?: boolean;
  isRequired?: boolean;
}
