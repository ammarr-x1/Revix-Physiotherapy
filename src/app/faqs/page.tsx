'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';


interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}


function FAQItem({ question, answer, index }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: 'easeOut',
            }}
            className={cn(
                'group border border-border/60 rounded-xl',
                'transition-all duration-200 ease-in-out',
                isOpen ? 'bg-card shadow-lg' : 'hover:bg-card/50',
            )}
        >
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4"
            >
                <h3
                    className={cn(
                        'text-left text-base font-medium transition-colors duration-200',
                        'text-foreground/80',
                        isOpen && 'text-primary',
                    )}
                >
                    {question}
                </h3>
                <motion.div
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                    }}
                    className={cn(
                        'shrink-0 rounded-full p-0.5',
                        'transition-colors duration-200',
                        isOpen ? 'text-primary' : 'text-muted-foreground',
                    )}
                >
                    <ChevronDown className="h-4 w-4" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: 'auto',
                            opacity: 1,
                            transition: {
                                height: {
                                    duration: 0.4,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                },
                                opacity: {
                                    duration: 0.25,
                                    delay: 0.1,
                                },
                            },
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: {
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                },
                                opacity: {
                                    duration: 0.25,
                                },
                            },
                        }}
                    >
                        <div className="border-t border-border/40 px-6 pt-2 pb-4">
                            <motion.p
                                initial={{ y: -8, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -8, opacity: 0 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeOut',
                                }}
                                className="text-sm leading-relaxed text-muted-foreground"
                            >
                                {answer}
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}


export default function FaqsPage() {

    const faqs: Omit<FAQItemProps, 'index'>[] = [
        {
            question: 'What types of conditions do you treat?',
            answer:
                'We treat a wide range of musculoskeletal conditions, including back and neck pain, sports injuries, post-operative rehabilitation, arthritis, headaches, and more. Our experienced physiotherapists will create a personalized treatment plan for you.',
        },
        {
            question: 'Do I need a referral from my doctor?',
            answer:
                'In most cases, you do not need a doctor\'s referral to see a physiotherapist. However, if your injury is related to a motor vehicle accident or a workplace claim, you may need a referral from your doctor.',
        },
        {
            question: 'How long is a typical physiotherapy session?',
            answer:
                'The first appointment typically lasts 45-60 minutes, which includes a comprehensive assessment and initial treatment. Follow-up sessions are usually 30-45 minutes, depending on your treatment plan.',
        },
        {
            question: 'What should I wear to my appointment?',
            answer:
                'We recommend wearing comfortable, loose-fitting clothing that allows you to move freely. This helps us to properly assess the affected area and for you to perform exercises without restriction.',
        },
        {
            question: 'Will my health insurance cover the cost?',
            answer:
                'Most private health insurance plans cover physiotherapy services. We recommend checking with your insurance provider to confirm your coverage details, as plans vary.',
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-background py-16">
            {/* Decorative elements, now in green based on the new theme */}
            <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

            <div className="container relative mx-auto max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-12 max-w-2xl text-center"
                >
                    <Badge
                        variant="outline"
                        className="mb-4 border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider"
                    >
                        FAQs
                    </Badge>

                    <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Everything you need to know about Revix Physio Care
                    </p>
                </motion.div>

                <div className="mx-auto max-w-2xl space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={cn('mx-auto mt-12 max-w-md rounded-lg p-6 text-center')}
                >
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary">
                        <Mail className="h-4 w-4" />
                    </div>
                    <p className="mb-1 text-sm font-medium text-foreground">
                        Still have questions?
                    </p>
                    <p className="mb-4 text-xs text-muted-foreground">
                        We&apos;re here to help you
                    </p>
                    <button
                        type="button"
                        className={cn(
                            'rounded-md px-4 py-2 text-sm',
                            'bg-primary text-primary-foreground',
                            'hover:bg-primary/90',
                            'transition-colors duration-200',
                            'font-medium',
                        )}
                    >
                        Contact Support
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
