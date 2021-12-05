import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  placeholder?: string;
  error?: FieldError;
}
