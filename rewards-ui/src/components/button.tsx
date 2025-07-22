import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  disabled: boolean;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ disabled = false, className = '', onClick, children }: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 text-white rounded ${
      disabled
        ? 'bg-sky-300 opacity-50 cursor-not-allowed'
        : 'bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 hover:cursor-pointer'
    } ${className}`}
  >
    {children}
  </button>
);
