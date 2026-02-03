'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Twitter, Facebook, Instagram, Github } from 'lucide-react';
import Link from 'next/link';
import { Spotlight } from '@/components/ui/spotlight';
import { BorderBeam } from '@/components/ui/border-beam';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        console.log('Form submitted:', form);

        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
            setForm({ name: '', email: '', message: '' });
        }, 1200);
    };

    return (
        <section className="relative w-full overflow-hidden pt-20">
            {/* Background Effects */}
            <Spotlight
                gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(145, 100%, 50%, 0.08) 0, hsla(149, 100%, 55%, 0.04) 50%, hsla(145, 100%, 45%, 0) 80%)"
                gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(145, 100%, 85%, 0.08) 0, hsla(145, 100%, 55%, 0.04) 80%, transparent 100%)"
                gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(145, 100%, 85%, 0.06) 0, hsla(145, 100%, 85%, 0.06) 80%, transparent 100%)"
            />

            <div className="relative z-10 mx-auto container px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <h1 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                        Let&apos;s Get in Touch
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        We’d love to hear from you. Fill out the form or connect with us directly.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="relative rounded-2xl border border-border/40 bg-gradient-to-br from-background/40 to-background/20 p-8 backdrop-blur-xl shadow-xl"
                    >
                        <BorderBeam duration={10} size={300} className="from-transparent via-primary/30 to-transparent" />
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-2 w-full rounded-lg border border-border/30 bg-background/80 px-4 py-3 text-foreground shadow-inner focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-muted-foreground">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-2 w-full rounded-lg border border-border/30 bg-background/80 px-4 py-3 text-foreground shadow-inner focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-muted-foreground">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                    className="mt-2 w-full rounded-lg border border-border/30 bg-background/80 px-4 py-3 text-foreground shadow-inner focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none"
                                    placeholder="Write your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-3 font-medium text-white shadow-lg transition-all hover:opacity-90 disabled:opacity-50"
                            >
                                {submitting ? 'Sending...' : 'Send Message'}
                                <Send className="h-4 w-4" />
                            </button>
                            {submitted && <p className="mt-3 text-sm text-green-500">Thanks! We’ll be in touch shortly.</p>}
                        </div>
                    </motion.form>

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="space-y-8"
                    >
                        <div className="rounded-2xl border border-border/40 bg-gradient-to-br from-background/40 to-background/20 p-6 backdrop-blur-xl shadow-lg">
                            <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Email us</p>
                                    <p className="font-medium">support@revixphysiocare.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border/40 bg-gradient-to-br from-background/40 to-background/20 p-6 backdrop-blur-xl shadow-lg">
                            <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Call us</p>
                                    <p className="font-medium">+92 300 1234567</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border/40 bg-gradient-to-br from-background/40 to-background/20 p-6 backdrop-blur-xl shadow-lg">
                            <div className="flex items-center gap-4">
                                <MapPin className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Visit us</p>
                                    <p className="font-medium">Techno Main Salt Lake, Sector-V, Kolkata-700091</p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-6 pt-4">
                            {[Twitter, Facebook, Instagram].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border/30 bg-background/80 shadow-lg transition hover:bg-primary/10"
                                >
                                    <Icon className="h-5 w-5 text-muted-foreground" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
