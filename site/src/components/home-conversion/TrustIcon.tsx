import type { ReactNode } from "react";

export type TrustIconProps = {
  variant: "experience" | "projects" | "partners" | "precision" | "sustainability" | "value";
};

export function TrustIcon({ variant }: TrustIconProps) {
  const paths: Record<TrustIconProps["variant"], ReactNode> = {
    experience: (
      <path
        d="M12 2L4 6v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V6l-8-4zm0 2.2l6 3v5.8c0 3.9-2.6 7.5-6 8.7-3.4-1.2-6-4.8-6-8.7V7.2l6-3z"
        fill="currentColor"
      />
    ),
    projects: (
      <path
        d="M4 4h16v2H4V4zm0 5h10v2H4V9zm0 5h16v2H4v-2zm0 5h10v2H4v-2z"
        fill="currentColor"
      />
    ),
    partners: (
      <path
        d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.3 0-7 1.2-7 3.5V20h14v-3.5C15 14.2 10.3 13 8 13zm8 0c-.3 0-.6 0-1 .1 1.2.8 2 1.9 2 3.4V20h7v-3.5c0-2.3-4.7-3.5-8-3.5z"
        fill="currentColor"
      />
    ),
    precision: (
      <path
        d="M19.4 4.6L12 2 4.6 4.6 2 12l2.6 7.4L12 22l7.4-2.6L22 12 19.4 4.6zM12 4.2l5.5 1.9 1.9 5.5-1.9 5.5L12 19.8l-5.5-1.9-1.9-5.5 1.9-5.5L12 4.2zm-1 4.8v4l3.5 2.1.9-1.5-2.6-1.6V9h-1.8z"
        fill="currentColor"
      />
    ),
    sustainability: (
      <path
        d="M12 2C8 6 6 9.5 6 13a6 6 0 1012 0c0-3.5-2-7-6-11zm0 18a4 4 0 01-4-4c0-2.5 1.5-5.3 4-8.4 2.5 3.1 4 5.9 4 8.4a4 4 0 01-4 4z"
        fill="currentColor"
      />
    ),
    value: (
      <path
        d="M12 1L3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm1 17.9V20h-2v-1.1A7.96 7.96 0 015 11V6.3l7-3.1 7 3.1V11c0 3.4-1.9 6.5-5 7.9zM11 9h2v6h-2V9zm0 8h2v2h-2v-2z"
        fill="currentColor"
      />
    ),
  };

  const variants: TrustIconProps["variant"][] = [
    "experience",
    "projects",
    "partners",
    "precision",
    "sustainability",
    "value",
  ];

  const iconVariant = variants.includes(variant) ? variant : "experience";

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/25 text-primary">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        {paths[iconVariant]}
      </svg>
    </span>
  );
}
