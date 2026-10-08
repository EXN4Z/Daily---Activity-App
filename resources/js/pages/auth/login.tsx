import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { Button } from '@/components/shared/button';
import { FormField, inputClass } from '@/components/shared/form-field';
import AuthLayout from '@/layouts/auth-layout';

export default function Login() {
    const form = useForm({ email: '', password: '', remember: false });

    function submit(e: FormEvent) {
        e.preventDefault();
        form.post('/login', { onFinish: () => form.reset('password') });
    }

    return (
        <AuthLayout title="Masuk">
            <Head title="Masuk" />
            <form onSubmit={submit} className="space-y-4">
                <FormField label="Email" error={form.errors.email}>
                    <input
                        type="email"
                        className={inputClass}
                        value={form.data.email}
                        onChange={(e) => form.setData('email', e.target.value)}
                        autoFocus
                    />
                </FormField>
                <FormField label="Password" error={form.errors.password}>
                    <input
                        type="password"
                        className={inputClass}
                        value={form.data.password}
                        onChange={(e) => form.setData('password', e.target.value)}
                    />
                </FormField>
                <label className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        checked={form.data.remember}
                        onChange={(e) => form.setData('remember', e.target.checked)}
                    />
                    Ingat saya
                </label>
                <Button type="submit" className="w-full" disabled={form.processing}>
                    Masuk
                </Button>
            </form>
            <p className="text-center text-sm text-gray-500">
                Belum punya akun?{' '}
                <Link href="/register" className="text-indigo-600 hover:underline">
                    Daftar
                </Link>
            </p>
        </AuthLayout>
    );
}

