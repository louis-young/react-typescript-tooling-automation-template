import type { TextInputProps } from "./types";

export const TextInput = ({
  ariaLabel,
  name,
  placeholder = "",
  id,
  type,
  value,
  onValueChange,
  isDisabled = false,
  isRequired = false,
}: TextInputProps) => {
  return (
    <input
      aria-label={ariaLabel}
      name={name}
      placeholder={placeholder}
      id={id}
      type={type}
      value={value}
      onChange={(event) => onValueChange(event.target.value)}
      disabled={isDisabled}
      required={isRequired}
      className="block w-full rounded-md border border-gray-200 bg-gray-100 p-3 disabled:cursor-not-allowed disabled:opacity-60"
    />
  );
};
