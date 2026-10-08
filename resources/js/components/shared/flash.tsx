import { usePage } from '@inertiajs/react';

export function Flash() {
    const { flash } = usePage().props;

    if (!flash.success && !flash.error) {
        return null;
    }

    return (
        <div className="mb-4 space-y-2">
            {flash.success && (
                <div className="rounded-md bg-green-50 px-4 py-3 text-sm text-green-800">
                    {flash.success}
                </div>
            )}
            {flash.error && (
                <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-800">
                    {flash.error}
                </div>
            )}
        </div>
    );
}

