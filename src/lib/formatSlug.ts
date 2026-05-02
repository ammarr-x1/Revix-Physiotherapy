/** Converts a URL slug into a human-readable label.
 *  e.g. "ankle-foot" → "Ankle Foot", "sports-injuries" → "Sports Injuries"
 *  Safe to import from both Server and Client Components.
 */
export function formatSlug(slug: string): string {
    return slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
