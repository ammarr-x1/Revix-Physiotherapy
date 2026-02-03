import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "The team at Re-Fit Physiotherapy has been incredible. Their professional, compassionate care helped me recover from my injury faster than I ever thought possible. I can't recommend them enough!",
            author: 'John P.',

        },
        {
            quote: "My experience with Re-Fit was fantastic. The staff is knowledgeable and friendly, and they tailored a treatment plan that was perfect for my needs. I feel so much better now.",
            author: 'Jane S.',

        },
        {
            quote: "Excellent service and genuine care. My back pain has significantly improved, and I've learned so much about maintaining my health. Thank you for everything!",
            author: 'Michael B.',

        },
    ];

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-emerald-800 mb-12">
                    What our clients say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start space-y-4 transition-transform duration-300 hover:scale-105">
                            <Quote className="text-cyan-600 h-8 w-8" />
                            <p className="text-gray-700 italic leading-relaxed flex-grow">
                                "{testimonial.quote}"
                            </p>
                            <div className="pt-4 mt-auto border-t border-gray-200 w-full">
                                <p className="font-semibold text-emerald-800">{testimonial.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
