import { ReactNode } from 'react';

interface NavButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  className?: string;
}

export default function NavButton({ children, onClick, href, download, className = '' }: NavButtonProps) {
  const baseStyles = "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors";
  
  if (href) {
    return (
      <a 
        href={href}
        download={download}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
}