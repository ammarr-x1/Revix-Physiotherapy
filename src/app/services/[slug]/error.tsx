'use client';

import Link from 'next/link';

export default function ServicesError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="bg-gray-50 text-gray-800 min-h-[60vh] flex items-center justify-center">
            <div className="text-center px-6 py-20 max-w-md bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">Service Content Error</h1>
                <p className="text-gray-600 mb-8">
                    {error.message || 'We encountered an error while loading this service information.'}
                </p>
                <div className="flex flex-col gap-3">
                    <button
                        onClick={reset}
                        className="bg-cyan-600 text-white px-8 py-3 rounded-xl hover:bg-cyan-700 transition-colors font-bold shadow-md"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/services"
                        className="text-cyan-600 font-semibold hover:underline"
                    >
                        View All Services
                    </Link>
                </div>
            </div>
        </main>
    );
}
