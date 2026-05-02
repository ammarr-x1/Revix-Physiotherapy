import { MetadataRoute } from 'next';
import { createBrowserClient } from '@supabase/ssr';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://revixphysiotherapy.com';

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Fetch dynamic routes
    const { data: services } = await supabase.from('services').select('slug').eq('is_active', true);
    const { data: conditions } = await supabase.from('treatable_conditions').select('slug');

    const serviceUrls = (services ?? []).map((s) => ({
        url: `${baseUrl}/services/${s.slug}`,
        lastModified: new Date(),
    }));

    const conditionUrls = (conditions ?? []).map((c) => ({
        url: `${baseUrl}/what-do-we-treat/${c.slug}`,
        lastModified: new Date(),
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/services`, lastModified: new Date() },
        { url: `${baseUrl}/what-do-we-treat`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/faqs`, lastModified: new Date() },
        ...serviceUrls,
        ...conditionUrls,
    ];
}
