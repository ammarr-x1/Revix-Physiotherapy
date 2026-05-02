import { createClient } from '@/utils/supabase/server';
import { cache } from 'react';

export interface Service {
    id: string;
    slug: string;
    title: string;
    hero_title: string;
    hero_image: string;
    description: string;
    treatable_conditions: string[] | null;
    is_active: boolean;
    created_at: string;
}

// Narrow type for index/grid previews — excludes internal metadata and heavy arrays
export type ServicePreview = Pick<Service, 'slug' | 'title' | 'hero_title' | 'hero_image' | 'description'>;

/**
 * Fetch all active services with full details.
 * Used for service index pages or detailed listings.
 */
/**
 * Fetch all active services for index/grid views.
 * Optimized: Only selects necessary preview columns to reduce payload and DB pressure.
 */
export const getServices = cache(async (): Promise<ServicePreview[]> => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('services')
        .select('slug, title, hero_title, hero_image, description')
        .eq('is_active', true)
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Database Error [getServices]:', error.message);
        return [];
    }

    return data as ServicePreview[];
});

/**
 * Lightweight fetch for navigation menus.
 * Only selects 'slug' and 'title' to minimize database payload and latency.
 */
export const getServiceNavItems = cache(async () => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('services')
        .select('slug, title')
        .eq('is_active', true)
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Database Error [getServiceNavItems]:', error.message);
        return [];
    }

    return data as Pick<Service, 'slug' | 'title'>[];
});

// Fetch a single service by its slug
export const getServiceBySlug = cache(async (slug: string): Promise<Service | null> => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

    if (error) {
        console.error(`Database Error [getServiceBySlug: ${slug}]:`, error.message);
        return null;
    }

    return data as Service;
});
