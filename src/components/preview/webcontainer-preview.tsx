import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPreviewDocument } from "@/lib/webcontainer";

export function WebContainerPreview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Preview</CardTitle>
        <CardDescription>WebContainer-ready shell with a graceful iframe fallback.</CardDescription>
      </CardHeader>
      <CardContent>
        <iframe
          className="h-[420px] w-full rounded-[1.5rem] border border-charcoal/10 bg-white"
          sandbox="allow-scripts"
          srcDoc={getPreviewDocument("COSY Studio")}
          title="COSY Studio Preview"
        />
      </CardContent>
    </Card>
  );
}
