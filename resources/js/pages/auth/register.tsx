import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { Button } from '@/components/shared/button';
import { FormField, inputClass } from '@/components/shared/form-field';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
    const form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        form.post('/register', {
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    }

    return (
        <AuthLayout title="Daftar">
            <Head title="Daftar" />
            <form onSubmit={submit} className="space-y-4">
                <FormField label="Nama" error={form.errors.name}>
                    <input
                        className={inputClass}
                        value={form.data.name}
                        onChange={(e) => form.setData('name', e.target.value)}
                        autoFocus
                    />
                </FormField>
                <FormField label="Email" error={form.errors.email}>
                    <input
                        type="email"
                        className={inputClass}
                        value={form.data.email}
                        onChange={(e) => form.setData('email', e.target.value)}
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
                <FormField label="Ulangi password">
                    <input
                        type="password"
                        className={inputClass}
                        value={form.data.password_confirmation}
                        onChange={(e) =>
                            form.setData('password_confirmation', e.target.value)
                        }
                    />
                </FormField>
                <Button type="submit" className="w-full" disabled={form.processing}>
                    Daftar
                </Button>
            </form>
            <p className="text-center text-sm text-gray-500">
                Sudah punya akun?{' '}
                <Link href="/login" className="text-indigo-600 hover:underline">
                    Masuk
                </Link>
            </p>
        </AuthLayout>
    );
}

