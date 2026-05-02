'use server';

import { createClient } from '@/utils/supabase/server';
import { z } from 'zod';

// Lightweight validation for Inquiries
const inquirySchema = z.object({
    full_name: z.string().min(2, "Name is too short").max(100),
    email: z.string().email("Invalid email address"),
    subject: z.string().max(200).optional(),
    message: z.string().min(10, "Message is too short").max(2000),
});

export async function submitInquiry(formData: FormData) {
    const validatedFields = inquirySchema.safeParse({
        full_name: formData.get('full_name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return { success: false, error: validatedFields.error.flatten().fieldErrors };
    }

    const supabase = await createClient();
    const { error } = await supabase
        .from('inquiries')
        .insert([validatedFields.data]);

    if (error) {
        console.error('Inquiry Submission Error:', error.message, error.details);
        return { success: false, error: "We're having trouble sending your message right now. Please try calling us instead." };
    }

    return { success: true };
}

// Lightweight validation for Appointments
const appointmentSchema = z.object({
    patient_name: z.string().min(2, "Name is too short").max(100),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Invalid phone number"),
    service_type: z.string().optional(),
    preferred_date: z.string(), // HTML date input returns string YYYY-MM-DD
    message: z.string().max(1000).optional(),
});

export async function submitAppointment(formData: FormData) {
    const validatedFields = appointmentSchema.safeParse({
        patient_name: formData.get('patient_name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service_type: formData.get('service_type'),
        preferred_date: formData.get('preferred_date'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return { success: false, error: validatedFields.error.flatten().fieldErrors };
    }

    const supabase = await createClient();
    const { error } = await supabase
        .from('appointments')
        .insert([validatedFields.data]);

    if (error) {
        console.error('Appointment Submission Error:', error.message, error.details);
        return { success: false, error: "Unable to process booking. Please try again or contact us via phone." };
    }

    return { success: true };
}
