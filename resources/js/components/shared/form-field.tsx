import type { ReactNode } from 'react';

export const inputClass =
    'block w-full rounded-md border-0 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-600';

type Props = {
    label: string;
    error?: string;
    children: ReactNode;
};

export function FormField({ label, error, children }: Props) {
    return (
        <label className="block space-y-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {label}
            </span>
            {children}
            {error && <span className="block text-sm text-red-600">{error}</span>}
        </label>
    );
}

