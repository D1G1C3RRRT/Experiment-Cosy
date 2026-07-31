import { create } from "zustand";

import type { StudioFile } from "@/types/project";

const initialFiles: StudioFile[] = [
  {
    path: "src/app/(dashboard)/studio/[projectId]/page.tsx",
    language: "tsx",
    content: "export default function StudioPage() { return <ResizableIDE />; }"
  },
  {
    path: "src/components/layout/resizable-ide.tsx",
    language: "tsx",
    content: "<PanelGroup direction=\"horizontal\">...</PanelGroup>"
  },
  {
    path: "src/lib/validations/project.ts",
    language: "ts",
    content: "export const projectSchema = z.object({...});"
  }
];

interface FileStore {
  currentPath: string;
  files: StudioFile[];
  setCurrentPath: (path: string) => void;
}

export const useFileStore = create<FileStore>((set) => ({
  currentPath: initialFiles.at(0)?.path ?? "src/app/(dashboard)/studio/[projectId]/page.tsx",
  files: initialFiles,
  setCurrentPath: (path) => set({ currentPath: path })
}));
