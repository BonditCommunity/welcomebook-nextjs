'use client';

export function combineClassName<T>(className: string, props?: string): string {
    if (!props) return className;
    return `${className} ${props}`;
}
