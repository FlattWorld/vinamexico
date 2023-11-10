import { ButtonProps } from '@/utils/types';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) => {
  const variantStyles = {
    primary:
      'bg-vina-orange-dark hover:bg-white text-white hover:text-vina-orange-dark border-vina-orange-dark',
    secondary:
      'bg-vina-purple-dark text-white border-vina-purple-dark hover:bg-white hover:text-vina-purple-dark',
    danger:
      'bg-pink-700 hover:bg-red-600 text-pink-100 hover:text-white border-pink-700 hover:border-red-600',
    ghost:
      'bg-white text-vina-blue-dark border-vina-blue-dark hover:bg-vina-blue-dark hover:text-white',
  };

  const disabledStyle = 'bg-gray-300 text-white cursor-not-allowed';

  return (
    <button
      className={`border-2 w-40 py-2 rounded-lg cursor-pointer ${className} ${
        disabled ? disabledStyle : variantStyles[variant]
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
