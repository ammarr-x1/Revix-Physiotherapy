"use client";

import { CalendarCheck } from 'lucide-react';
import React, { useState } from 'react';

import { submitAppointment } from '@/app/actions/forms';

interface AppointmentFormProps {
    compact?: boolean;
}

export default function AppointmentForm({ compact = false }: AppointmentFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<null | 'success' | 'error'>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg(null);

        const formData = new FormData(form);
        const result = await submitAppointment(formData);

        setIsSubmitting(false);
        if (result.success) {
            setSubmissionStatus('success');
            form.reset();
        } else {
            setSubmissionStatus('error');
            setErrorMsg(typeof result.error === 'string' ? result.error : 'Please check your information and try again.');
        }
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
                                name="patient_name"
                                placeholder="Full Name"
                                required
                                className="w-full p-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full p-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                required
                                className="w-full p-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                            />
                        </div>
                        <div>
                            <select 
                                name="service_type" 
                                required
                                className="w-full p-3 rounded-lg border border-gray-200 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
                            >
                                <option value="">Select Service</option>
                                <option value="Physiotherapy">Physiotherapy</option>
                                <option value="Aged Care">Aged Care</option>
                                <option value="NDIS">NDIS</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 ml-1 mb-1 block">Preferred Date</label>
                            <input
                                type="date"
                                name="preferred_date"
                                required
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full p-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Any specific concerns?"
                                rows={2}
                                className="w-full p-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 text-sm shadow-md disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending Request...' : 'Request Appointment'}
                        </button>
                        {errorMsg && <p className="text-xs text-red-500 text-center">{errorMsg}</p>}
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
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
                                    <input
                                        type="text"
                                        name="patient_name"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full p-4 rounded-xl bg-input text-foreground placeholder-muted-foreground border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@mail.com"
                                        required
                                        className="w-full p-4 rounded-xl bg-input text-foreground placeholder-muted-foreground border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="e.g., +61 400 000 000"
                                        required
                                        className="w-full p-4 rounded-xl bg-input text-foreground placeholder-muted-foreground border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Service Required</label>
                                    <select 
                                        name="service_type" 
                                        required
                                        className="w-full p-4 rounded-xl bg-input text-foreground border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="Physiotherapy">Physiotherapy</option>
                                        <option value="Massage Therapy">Massage Therapy</option>
                                        <option value="Aged Care">Aged Care</option>
                                        <option value="NDIS Support">NDIS Support</option>
                                        <option value="Sports Injury">Sports Injury</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Preferred Date</label>
                                    <input
                                        type="date"
                                        name="preferred_date"
                                        required
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full p-4 rounded-xl bg-input text-foreground border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Additional Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell us more about your needs..."
                                        className="w-full p-4 rounded-xl bg-input text-foreground placeholder-muted-foreground border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 min-h-[120px]"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-colors duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none"
                                    >
                                        {isSubmitting ? 'Processing Request...' : 'Send Appointment Request'}
                                    </button>
                                    {errorMsg && <p className="mt-4 text-center text-red-500 font-medium">{errorMsg}</p>}
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}