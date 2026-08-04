export function getSeverityLabel(v: number): string {
  if (v <= 3) return "Mild";
  if (v <= 6) return "Moderate";
  if (v <= 8) return "Significant";
  return "Severe";
}
