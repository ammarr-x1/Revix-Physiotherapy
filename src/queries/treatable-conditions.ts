import { createClient } from '@/utils/supabase/server';
import { cache } from 'react';

export interface ConditionSection {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
}

export interface TreatableCondition {
    id: string;
    slug: string;
    hero_title: string;
    hero_image: string;
    sections: ConditionSection[];
    created_at: string;
}

// Narrow type for navbar — avoids shipping full JSONB sections to the client
export type ConditionNavItem = Pick<TreatableCondition, 'slug' | 'hero_image'>;

// Narrow type for index/grid previews — excludes heavy JSONB sections
export type ConditionPreview = Pick<TreatableCondition, 'slug' | 'hero_title' | 'hero_image'>;


/**
 * Fetch all treatable conditions for the index grid.
 * Optimized: Excludes the heavy 'sections' JSONB field to minimize DB overhead.
 */
export const getTreatableConditions = cache(async (): Promise<ConditionPreview[]> => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('treatable_conditions')
        .select('slug, hero_title, hero_image')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('DB Error [getTreatableConditions]:', error.message);
        return [];
    }

    return data as ConditionPreview[];
});

export const getConditionNavItems = cache(async (): Promise<ConditionNavItem[]> => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('treatable_conditions')
        .select('slug, hero_image')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('DB Error [getConditionNavItems]:', error.message);
        return [];
    }

    return data as ConditionNavItem[];
});

export const getTreatableConditionBySlug = cache(async (slug: string): Promise<TreatableCondition | null> => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('treatable_conditions')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        console.error(`DB Error [getTreatableConditionBySlug: ${slug}]:`, error.message);
        return null;
    }

    return data as TreatableCondition;
});
