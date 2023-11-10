export type Church = {
  name: string;
  address: string;
  city?: string;
  pastor: string[];
  street?: string;
  url?: string;
  phone?: string[];
  email?: string[];
};

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: any;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  disabled?: boolean;
};

export type Languages = 'EN' | 'ES';