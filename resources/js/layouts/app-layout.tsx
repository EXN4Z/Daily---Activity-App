import { Link, router, usePage } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { Flash } from '@/components/shared/flash';
import { cn } from '@/lib/utils';

const menu = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Todo', href: '/todos' },
    { label: 'Aktivitas', href: '/activities' },
];

export default function AppLayout({ children }: { children: ReactNode }) {
    const { props, url } = usePage();
    const { auth, name } = props;

    const items =
        auth.user.role === 'admin'
            ? [...menu, { label: 'Admin', href: '/admin' }]
            : menu;

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
            <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-6">
                        <span className="font-semibold">{name}</span>
                        <nav className="flex gap-1">
                            {items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'rounded-md px-3 py-1.5 text-sm',
                                        url.startsWith(item.href)
                                            ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                                            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <span className="text-gray-500">{auth.user.name}</span>
                        <button
                            type="button"
                            onClick={() => router.post('/logout')}
                            className="text-gray-600 hover:underline dark:text-gray-300"
                        >
                            Keluar
                        </button>
                    </div>
                </div>
            </header>
            <main className="mx-auto max-w-5xl px-4 py-8">
                <Flash />
                {children}
            </main>
        </div>
    );
}

