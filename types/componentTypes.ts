type InputType = 'text' | 'password' | 'checkbox' | 'radio' | 'email' | 'tel' | 'number';

export type InputProps = {
  label: string;
  type: InputType;
  name: string;
  value: string | number | readonly string[] | undefined;
  onChange: any
  disabled?: boolean; 
  icon?: any;
  required?: boolean
}