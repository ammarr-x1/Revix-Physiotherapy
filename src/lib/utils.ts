import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ZodError } from "zod";

/** Merges Tailwind classes without conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Formats a Supabase TIMESTAMPTZ to a readable format (e.g., "Oct 12, 2026") */
export function formatDate(dateString: string | Date): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/** Formats URL slugs back to readable text (e.g., 'general-physiotherapy' -> 'General Physiotherapy') */
export function unslugify(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/** Flattens Zod errors into a simple, user-friendly string */
export function formatZodError(error: ZodError): string {
  // Returns the first error message encountered
  return error.issues[0]?.message || "Invalid form data. Please check your inputs.";
}
