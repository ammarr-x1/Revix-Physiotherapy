export default function ConditionPageLoading() {
    return (
        <main className="bg-gray-50 animate-pulse">
            {/* Hero skeleton */}
            <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between gap-12">
                    <div className="flex-1 space-y-4">
                        <div className="h-10 w-2/3 bg-gray-300 rounded-lg" />
                        <div className="w-16 h-1 bg-teal-300 rounded-full" />
                        <div className="h-5 w-full bg-gray-200 rounded" />
                        <div className="h-5 w-4/5 bg-gray-200 rounded" />
                    </div>
                    <div className="hidden lg:block lg:w-1/3 aspect-square rounded-2xl bg-gray-300" />
                </div>
            </section>

            {/* Sections skeleton */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                        <div className="lg:col-span-8 space-y-10">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden h-[280px] flex">
                                    <div className="w-2/5 bg-gray-200" />
                                    <div className="w-3/5 p-10 flex flex-col justify-center space-y-4">
                                        <div className="h-7 w-1/2 bg-gray-200 rounded" />
                                        <div className="w-12 h-1 bg-teal-200 rounded-full" />
                                        <div className="h-4 w-full bg-gray-200 rounded" />
                                        <div className="h-4 w-full bg-gray-200 rounded" />
                                        <div className="h-4 w-3/4 bg-gray-200 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="lg:col-span-4">
                            <div className="bg-white rounded-2xl border border-gray-100 h-[400px]" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
