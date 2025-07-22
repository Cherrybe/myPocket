import { FocusEventHandler } from 'react'
export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placholder?: string
  type?: 'text' | 'password' | 'email' | 'number'
  helperText?: string
  errorText?: string
  withIcon?: boolean
  icon?: React.ReactNode
  autocomplete?: string
  disabled?: boolean
}

export interface UseInputState {
  inputId: string
  isFocused: boolean
  hasError: boolean
  isActive: boolean
   onFocus: FocusEventHandler
  onBlur: FocusEventHandler
}

export interface UseInputProps {
  value?: string
  errorText?: string
  disabled?: boolean
  hasAutoComplete?: (event: AnimationEvent) => void
}
