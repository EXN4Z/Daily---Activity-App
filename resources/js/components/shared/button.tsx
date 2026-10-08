import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'danger';
};

const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500',
    secondary:
        'bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-600 dark:hover:bg-gray-700',
    danger: 'bg-red-600 text-white hover:bg-red-500',
};

export function Button({ variant = 'primary', className, ...props }: Props) {
    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition disabled:opacity-50',
                variants[variant],
                className,
            )}
            {...props}
        />
    );
}

