export default function ServicesLoading() {
    return (
        <main className="bg-gray-50 animate-pulse">
            {/* Hero skeleton */}
            <div className="w-full h-[400px] bg-gray-200 relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12 h-full flex items-center relative z-10">
                    <div className="space-y-4 w-full max-w-3xl">
                        <div className="h-12 w-2/3 bg-gray-300 rounded-lg" />
                        <div className="h-1 w-24 bg-cyan-300 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Content skeleton */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-xl p-8 lg:p-12 border border-gray-100">
                                <div className="h-10 w-1/2 bg-gray-200 rounded mb-8" />
                                <div className="space-y-4">
                                    <div className="h-4 w-full bg-gray-200 rounded" />
                                    <div className="h-4 w-full bg-gray-200 rounded" />
                                    <div className="h-4 w-3/4 bg-gray-200 rounded" />
                                </div>
                                <div className="mt-12 space-y-6">
                                    <div className="h-8 w-1/3 bg-gray-200 rounded" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="h-12 bg-gray-100 rounded-lg" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4">
                            <div className="bg-white rounded-xl h-[500px] shadow-sm border border-gray-100" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
