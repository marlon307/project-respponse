import { InputHTMLAttributes } from 'react';

export interface PInputRadio extends InputHTMLAttributes<T> {
  name: string;
  iId: string;
  family: string;
  iValue?: number;
  execFunction?: Function;
  checked: boolean
}

export interface PInputText extends InputHTMLAttributes<T> {
  id: string;
  type: string;
  name: string;
  placeHolder: string;
  autoComplete?: string;
  regexValidator?: RegExp;
  msgError?: string;
  disabled?: boolean;
  isValid?: boolean;
  dValue?: string;
  max?: number;
  // patt?: string;
  format?: string;
}
