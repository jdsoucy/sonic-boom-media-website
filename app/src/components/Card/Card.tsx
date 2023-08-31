import type { FC, ReactNode } from "react";
import cn from 'classnames';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={cn('text-dark flex-col bg-lighter p-6 bg-noise', className)}>
      <div className="text-4xl pb-4">{title}</div>
      <div>
        {children}
      </div>
    </div>
  )
}
