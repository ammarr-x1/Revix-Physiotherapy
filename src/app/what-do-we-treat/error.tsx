'use client';

import Link from 'next/link';

export default function WhatDoWeTreatError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="bg-gray-50 text-gray-800 min-h-[50vh] flex items-center justify-center">
            <div className="text-center px-6 py-20 max-w-md">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">Something went wrong</h1>
                <p className="text-gray-600 mb-8">
                    {error.message || 'Failed to load treatable conditions. Please try again.'}
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={reset}
                        className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
