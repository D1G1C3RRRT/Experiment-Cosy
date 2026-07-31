export interface ProjectSummary {
  id: string;
  title: string;
  description: string;
  updatedAtLabel: string;
}

export interface StudioFile {
  path: string;
  language: "ts" | "tsx" | "css" | "json";
  content: string;
}
