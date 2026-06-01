import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "I am regular at Revix Physiocare and I move and walk because of them. Dr Anas is young, strong and knowledgeable doctor. He has excellent sense of humor and is very very considerate. Worth visiting if you have mobility issues.",
            author: 'Ayaz Khan',

        },
        {
            quote: "I am getting treated be DR. ANAS, I have 9 months of facial palsy. And I have been around the city and almost been in every physio care there is in Islamabad. Nobody could unwind the mystery but him, He knows how to handle the most complicated cases that even shifa couldn't. Results are amazing.",
            author: 'Fahad Khan',

        },
        {
            quote: "Went through physiotherapy sessions at Revix Physical Therapy Islamabad, and it was a truly wonderful experience. The therapy proved to be very effective and was extremely helpful in overcoming the issues resulting from my injury. Dr. Anas is a very humble and highly professional individual. I highly recommend Revix Physical Therapy for effective rehabilitation in Islamabad.",
            author: 'Ahmed Zia',

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
