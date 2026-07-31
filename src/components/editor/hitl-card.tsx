import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function HitLCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Approval Gate</CardTitle>
        <CardDescription>Human-in-the-loop review is visible before any generated change is accepted.</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-3">
        <Button>Approve</Button>
        <Button variant="secondary">Reject</Button>
      </CardContent>
    </Card>
  );
}
