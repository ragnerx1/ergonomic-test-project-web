import { HTMLAttributes } from 'react';

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  onPress?: () => void;
  title: string;
  color?: string;
}
