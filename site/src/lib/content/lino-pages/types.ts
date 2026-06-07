export type LinoPageBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: "h2" | "h3" | "h4" | "h5"; text: string }
  | { type: "list"; items: string[] };

export type LinoPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  subtitle?: string;
  blocks: LinoPageBlock[];
};
