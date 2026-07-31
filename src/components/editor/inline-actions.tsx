import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function InlineActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inline Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        <Button>Apply diff</Button>
        <Button variant="secondary">Request audit</Button>
        <Button variant="ghost">Copy patch</Button>
      </CardContent>
    </Card>
  );
}
