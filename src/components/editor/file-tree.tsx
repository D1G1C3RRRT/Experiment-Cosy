"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFileStore } from "@/stores/use-file-store";

export function FileTree() {
  const currentPath = useFileStore((state) => state.currentPath);
  const files = useFileStore((state) => state.files);
  const setCurrentPath = useFileStore((state) => state.setCurrentPath);

  return (
    <Card>
      <CardHeader>
        <CardTitle>File Tree</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {files.map((file) => (
          <Button
            className="w-full justify-start"
            key={file.path}
            onClick={() => setCurrentPath(file.path)}
            variant={currentPath === file.path ? "primary" : "secondary"}
          >
            {file.path}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
