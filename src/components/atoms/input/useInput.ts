import { UseInputProps, UseInputState } from "./Input.types";
import { useId, useState } from 'react'

export function useInput ({
  errorText,
}: UseInputProps): UseInputState {
  const inputId = useId()
  const [isFocused, setIsFocused] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const hasError = !!errorText

  const onFocus: React.FocusEventHandler<HTMLInputElement> = () => {
    setIsFocused(true)
    setIsActive(false)
  }

  const onBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    setIsFocused(false)
    setIsActive(false)
  }

  return {
    inputId,
    isFocused,
    hasError,
    isActive,
    onFocus,
    onBlur,
  }
}