"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useFileStore } from "@/stores/use-file-store";

export function MonacoDiff() {
  const currentPath = useFileStore((state) => state.currentPath);
  const currentFile = useFileStore((state) => state.files.find((file) => file.path === currentPath));

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Live Code Diff</CardTitle>
        <CardDescription>{currentPath}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl bg-diff-del-bg p-4 font-mono text-sm text-diff-del-text">
          <p className="mb-3 text-xs uppercase tracking-[0.2em]">Before</p>
          <pre className="whitespace-pre-wrap">{`- Placeholder IDE shell\n- Missing design tokens\n- No strict blueprint structure`}</pre>
        </div>
        <div className="rounded-2xl bg-diff-add-bg p-4 font-mono text-sm text-diff-add-text">
          <p className="mb-3 text-xs uppercase tracking-[0.2em]">After</p>
          <pre className="whitespace-pre-wrap">{currentFile?.content ?? "+ COSY Studio scaffold ready"}</pre>
        </div>
      </CardContent>
    </Card>
  );
}
