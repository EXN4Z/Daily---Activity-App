import type { ReactNode } from 'react';

type Props = { color: string; children: ReactNode };

export function Badge({ color, children }: Props) {
    return (
        <span
            className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
            style={{ backgroundColor: `${color}22`, color }}
        >
            {children}
        </span>
    );
}

