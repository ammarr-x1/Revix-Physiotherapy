import { MetadataRoute } from 'next';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://revixphysiotherapy.com';

    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: { getAll: () => cookieStore.getAll() } }
    );

    const [{ data: services }, { data: conditions }] = await Promise.all([
        supabase.from('services').select('slug, updated_at').eq('is_active', true),
        supabase.from('treatable_conditions').select('slug, updated_at'),
    ]);

    const serviceUrls: MetadataRoute.Sitemap = (services ?? []).map((s) => ({
        url: `${baseUrl}/services/${s.slug}`,
        lastModified: s.updated_at ? new Date(s.updated_at) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const conditionUrls: MetadataRoute.Sitemap = (conditions ?? []).map((c) => ({
        url: `${baseUrl}/what-do-we-treat/${c.slug}`,
        lastModified: c.updated_at ? new Date(c.updated_at) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [
        { url: baseUrl,                                   lastModified: new Date(), changeFrequency: 'weekly',   priority: 1.0 },
        { url: `${baseUrl}/about`,                        lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.8 },
        { url: `${baseUrl}/services`,                     lastModified: new Date(), changeFrequency: 'weekly',   priority: 0.9 },
        { url: `${baseUrl}/what-do-we-treat`,             lastModified: new Date(), changeFrequency: 'weekly',   priority: 0.9 },
        { url: `${baseUrl}/contact`,                      lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.8 },
        { url: `${baseUrl}/faqs`,                         lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.7 },
        ...serviceUrls,
        ...conditionUrls,
    ];
}
