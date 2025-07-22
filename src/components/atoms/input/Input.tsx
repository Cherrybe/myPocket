import React from "react";
import { InputProps } from "./Input.types";
import { useInput } from "./useInput";
import { cn } from "@/shared/utils";

export const Input = ({
  value,
  onChange,
  placholder,
  type,
  helperText,
  errorText,
  withIcon,
  icon,
  disabled,
  autocomplete,
}: InputProps): React.JSX.Element => {
  const { inputId, isFocused, hasError, isActive, onFocus, onBlur } = useInput({
    errorText,
  });

  return (
    <div
      className={`relative ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placholder}
        onFocus={onFocus}
        autoComplete={autocomplete}
        onBlur={onBlur}
        disabled={disabled}
        className={cn(
          "w-full p-2 border rounded-sm", 
          isFocused ? "border-(--line)" : "",
          hasError ? "border-(--orange)" : "",
          isActive ? "border-(--primary-500)" : "",

        )}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${inputId}-error` : undefined}
      />

      {withIcon && icon && (
        <span className="absolute top-1/2 right-2 transform -translate-y-1/2">
          {icon}
        </span>
      )}
      {(helperText || errorText) && (
        <p className={hasError ? "text-(--orange) pt-1" : "text-(--grey-label)"}>
          {hasError ? errorText : helperText}
        </p>
      )}
    </div>
  );
};
