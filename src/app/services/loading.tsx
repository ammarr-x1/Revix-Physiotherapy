export default function ServicesIndexLoading() {
    return (
        <main className="bg-gray-50 animate-pulse">
            {/* Hero skeleton */}
            <section className="bg-white py-20 lg:py-28">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl space-y-6">
                        <div className="h-8 w-32 bg-gray-100 rounded-full" />
                        <div className="h-16 w-3/4 bg-gray-200 rounded-xl" />
                        <div className="h-16 w-full bg-gray-200 rounded-xl" />
                        <div className="h-6 w-2/3 bg-gray-200 rounded-lg" />
                    </div>
                </div>
            </section>

            {/* Grid skeleton */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white rounded-3xl h-[500px] border border-gray-100 overflow-hidden">
                                <div className="h-48 w-full bg-gray-200" />
                                <div className="p-8 space-y-4">
                                    <div className="h-8 w-2/3 bg-gray-200 rounded" />
                                    <div className="space-y-2">
                                        <div className="h-4 w-full bg-gray-100 rounded" />
                                        <div className="h-4 w-full bg-gray-100 rounded" />
                                        <div className="h-4 w-1/2 bg-gray-100 rounded" />
                                    </div>
                                    <div className="pt-8 mt-auto border-t border-gray-50">
                                        <div className="h-6 w-32 bg-gray-100 rounded" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
