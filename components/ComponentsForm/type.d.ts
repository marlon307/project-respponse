export type PInputRadio = {
  name: string;
  id: string;
  family: string;
  value?: number;
  execFunction?: Function;
  checked: boolean
};

export interface PInputText {
  id: string;
  type: string;
  name: string;
  placeHolder: string;
  autoComplete?: string;
  ivalue: any;
  inputValue: Function;
  regexValidator?: RegExp;
  msgError?: string;
  disabled?: boolean;
  isValid?: boolean;
  max?: number;
  patt?: string;
  format?: string;
}
