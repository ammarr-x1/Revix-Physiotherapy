'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center space-y-8 p-10 bg-white rounded-3xl shadow-xl border border-red-50">
                <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-10 w-10 text-red-600" />
                </div>
                
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-gray-900">Something went wrong</h1>
                    <p className="text-gray-600">
                        We apologize for the inconvenience. An unexpected error occurred while processing your request.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <button
                        onClick={() => reset()}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-800 text-white font-semibold rounded-xl hover:bg-emerald-900 transition-colors"
                    >
                        <RefreshCw className="h-4 w-4" />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                    >
                        <Home className="h-4 w-4" />
                        Go Home
                    </Link>
                </div>
                
                {error.digest && (
                    <p className="text-xs text-gray-400 font-mono">Error ID: {error.digest}</p>
                )}
            </div>
        </div>
    );
}
