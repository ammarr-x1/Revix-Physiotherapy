export default function WhatDoWeTreatLoading() {
    return (
        <main className="bg-gray-50">
            {/* Hero skeleton */}
            <section className="bg-gradient-to-r from-cyan-50 to-teal-100 py-16 lg:py-20 animate-pulse">
                <div className="container mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-4">
                    <div className="h-10 w-80 bg-gray-300 rounded-lg" />
                    <div className="w-16 h-1 bg-teal-300 rounded-full" />
                    <div className="h-5 w-96 bg-gray-200 rounded" />
                </div>
            </section>

            {/* Grid skeleton */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-pulse">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center bg-white rounded-2xl border border-gray-100 p-4 gap-3"
                            >
                                <div className="w-full aspect-square rounded-xl bg-gray-200" />
                                <div className="h-4 w-3/4 bg-gray-200 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
