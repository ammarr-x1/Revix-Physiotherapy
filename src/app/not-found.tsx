'use client';

import Link from 'next/link';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="relative">
                    <div className="mx-auto w-32 h-32 bg-cyan-50 rounded-full flex items-center justify-center animate-pulse">
                        <FileQuestion className="h-16 w-16 text-cyan-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        404
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Page Not Found
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        The page you are looking for doesn't exist or has been moved to a new recovery plan.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-800 text-white font-bold rounded-2xl shadow-xl hover:bg-emerald-900 transition-all transform hover:scale-105"
                    >
                        <Home className="h-5 w-5" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-all"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Go Back
                    </button>
                </div>

                <div className="pt-8">
                    <p className="text-sm text-gray-400">
                        Need assistance? <a href="/contact" className="text-cyan-600 font-semibold hover:underline">Contact our support team</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
