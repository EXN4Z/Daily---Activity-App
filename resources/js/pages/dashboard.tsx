import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function Dashboard() {
    const { auth } = usePage().props;

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <h1 className="text-2xl font-semibold">Halo, {auth.user.name} 👋</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                Ringkasan harianmu akan muncul di sini.
            </p>
        </AppLayout>
    );
}

