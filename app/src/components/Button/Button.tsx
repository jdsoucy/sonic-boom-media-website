import type { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
}

export const Button: FC<ButtonProps> = ({ href, children }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex rounded bg-primary text-white text-lg h-12 flex-inline items-center px-6 text-center justify-center w-auto transition-transform hover:-translate-y-1"
      >
        {children}
      </a>
    )
  }

  return (
  <button
    className="rounded bg-primary text-white text-lg h-12 flex-inline items-center px-6 text-center justify-center w-auto transition-transform hover:-translate-y-1"
  >
    {children}
  </button>
  );
}
