import React from "react";
import { RegionKey } from "@/lib/symptom-checker/types";

interface RegionIconProps {
  name: RegionKey;
  className?: string;
}

export default function RegionIcon({ name, className = "size-6" }: RegionIconProps) {
  const icons: Record<RegionKey, React.ReactNode> = {
    headjaw: (
      <>
        <circle cx="12" cy="11" r="7" />
        <path d="M7 14c1 3 3 5 5 5s4-2 5-5" />
      </>
    ),
    neck: (
      <>
        <circle cx="12" cy="5" r="3" />
        <path d="M10 8v3M14 8v3" />
        <path d="M6 20c0-4 3-6 6-6s6 2 6 6" />
      </>
    ),
    shoulder: (
      <>
        <circle cx="8" cy="7" r="2.2" />
        <path d="M8 9.2V20" />
        <path d="M8 7H3" />
      </>
    ),
    elbow: (
      <>
        <path d="M6 6l4 6" />
        <circle cx="11" cy="13" r="1.8" />
        <path d="M12.5 13.8l5-1" />
      </>
    ),
    wrist: (
      <>
        <rect x="8" y="11" width="8" height="9" rx="2" />
        <path d="M9 11V6M12 11V5M15 11V6" />
        <path d="M8 14L5 12" />
      </>
    ),
    chest: (
      <>
        <path d="M12 3c-3 2-7 2-7 7 0 6 3 11 7 11s7-5 7-11c0-5-4-5-7-7z" />
        <path d="M7 9c2 1 8 1 10 0M7 13c2 1 8 1 10 0" />
      </>
    ),
    upperback: (
      <>
        <path d="M12 3v18" />
        <path d="M8 6h8M8 9h8M8 12h8" />
      </>
    ),
    lowerback: (
      <>
        <path d="M12 3v18" />
        <path d="M8 13h8M8 16h8M8 19h8" />
      </>
    ),
    abdomen: (
      <>
        <path d="M7 5c-1 5-1 9 0 13a6 6 0 0010 0c1-4 1-8 0-13" />
        <path d="M12 12h.01" />
      </>
    ),
    hip: (
      <>
        <path d="M5 10c0-4 3-6 7-6s7 2 7 6" />
        <circle cx="7.5" cy="15" r="2" />
        <circle cx="16.5" cy="15" r="2" />
      </>
    ),
    pelvic: (
      <>
        <path d="M6 5h12v6c0 5-2.5 9-6 9s-6-4-6-9V5z" />
        <path d="M9 5v3M15 5v3" />
      </>
    ),
    buttock: (
      <>
        <path d="M12 4v4" />
        <path d="M6 8c0 6 2 11 6 11s6-5 6-11" />
        <path d="M12 8v11" />
      </>
    ),
    thigh: (
      <>
        <circle cx="11" cy="4" r="1.8" />
        <path d="M11 6v13" />
        <path d="M8 11h2M12 11h2" />
      </>
    ),
    knee: (
      <>
        <path d="M10 3l1 8" />
        <circle cx="11" cy="12" r="1.8" />
        <path d="M11 13.8l-1 7" />
      </>
    ),
    calf: (
      <>
        <path d="M10 4v6" />
        <path d="M10 10c3 1 4 4 3 9" />
      </>
    ),
    ankle: (
      <>
        <path d="M11 3v12" />
        <path d="M11 15c0 2 1.5 3 4 3h5" />
      </>
    ),
    multiple: (
      <>
        <circle cx="12" cy="6" r="3" />
        <path d="M5 21l2-9a3 3 0 013-3h4a3 3 0 013 3l2 9" />
      </>
    ),
    other: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9.5a2.5 2.5 0 113.5 2.3c-.9.6-1 1-1 2.2" />
        <path d="M12 17h.01" />
      </>
    )
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name] || icons.other}
    </svg>
  );
}
