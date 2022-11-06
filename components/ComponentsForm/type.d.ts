import type { InputHTMLAttributes } from 'react';

export interface PInputRadio extends InputHTMLAttributes<T> {
  name: string;
  iId: string;
  family: string;
  iValue?: number;
  execFunction?: Function;
  checked?: boolean
}

export interface Props extends InputHTMLAttributes<T> {
  isValid?: boolean;
  format?: string;
  msgError: string;
}
