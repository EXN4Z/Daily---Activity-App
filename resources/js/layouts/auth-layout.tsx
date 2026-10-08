import type { ReactNode } from 'react';

type Props = { title: string; children: ReactNode };

export default function AuthLayout({ title, children }: Props) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-gray-950">
            <div className="w-full max-w-sm space-y-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {title}
                </h1>
                {children}
            </div>
        </div>
    );
}

