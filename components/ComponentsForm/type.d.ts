import type { InputHTMLAttributes } from 'react';

export interface PropsRadio extends InputHTMLAttributes<T> {
  name: string;
  iId: string;
  family: string;
  iValue?: number;
  execFunction?: () => void;
  checked?: boolean
}

export interface Props extends InputHTMLAttributes<T> {
  isValid?: boolean;
  format?: string | null;
  msgError: string;
}
