"use client";

import { CalendarCheck } from 'lucide-react';
import React, { useState } from 'react';

interface AppointmentFormProps {
    compact?: boolean;
}

export default function AppointmentForm({ compact = false }: AppointmentFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState<null | 'success' | 'error'>(null);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);

        // Simulatng an API Call
        setTimeout(() => {
            setSubmissionStatus('success');

            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        }, 1500);
    };

    // Compact version for sidebar use
    if (compact) {
        return (
            <div className="w-full">
                {submissionStatus === 'success' ? (
                    <div className="text-center py-6">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CalendarCheck className="w-6 h-6 text-green-600" />
                        </div>
                        <p className="text-lg font-semibold text-gray-900 mb-2">
                            Thank you!
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                            We'll contact you shortly to confirm your appointment.
                        </p>
                        <button
                            onClick={() => setSubmissionStatus(null)}
                            className="px-4 py-2 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors text-sm"
                        >
                            Book Another
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="w-full p-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="w-full p-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                                className="w-full p-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Service Needed"
                                required
                                className="w-full p-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Brief description of your needs"
                                required
                                rows={3}
                                className="w-full p-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 text-sm shadow-md"
                        >
                            Request Appointment
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-3">
                            We'll call you within 24 hours to confirm
                        </p>
                    </form>
                )}
            </div>
        );
    }

    // Original full-page version
    return (
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="p-4 bg-primary-foreground text-primary rounded-full shadow-lg mb-4">
                        <CalendarCheck className="h-8 w-8 md:h-12 md:w-12" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-primary-foreground">
                        Book Your Appointment
                    </h2>
                    <p className="mt-4 text-lg max-w-2xl text-primary-foreground/90">
                        Please fill out this form and we will call you back shortly to confirm your appointment. We look forward to helping you on your journey to better health.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="bg-card p-8 md:p-12 rounded-3xl shadow-2xl">
                        {submissionStatus === 'success' ? (
                            <div className="text-center py-10">
                                <p className="text-2xl font-semibold text-primary">
                                    Thank you for your request!
                                </p>
                                <p className="mt-2 text-muted-foreground">
                                    We will contact you shortly to confirm your appointment.
                                </p>
                                <button
                                    onClick={() => setSubmissionStatus(null)}
                                    className="mt-6 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-xl shadow-md hover:bg-secondary/80 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-1">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        required
                                        className="w-full p-4 rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        required
                                        className="w-full p-4 rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        required
                                        className="w-full p-4 rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        required
                                        className="w-full p-4 rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    required
                                    className="col-span-1 md:col-span-2 w-full p-4 rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 min-h-[150px]"
                                />
                                <button
                                    type="submit"
                                    className="col-span-1 md:col-span-2 w-full px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105"
                                >
                                    Send Appointment Request
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}