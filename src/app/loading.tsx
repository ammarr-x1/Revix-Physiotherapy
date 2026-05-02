import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-[60vh] w-full flex flex-col items-center justify-center space-y-6">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-cyan-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-cyan-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <div className="space-y-2 text-center">
                <p className="text-lg font-semibold text-emerald-900 animate-pulse">Loading Revix...</p>
                <p className="text-sm text-gray-500">Please wait a moment while we prepare your experience.</p>
            </div>
        </div>
    );
}
