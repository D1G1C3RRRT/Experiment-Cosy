import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  "Strict TypeScript enabled",
  "Tailwind design tokens loaded",
  "Theme provider active",
  "Prisma schema ready for generate"
] as const;

export function Inspector() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inspector</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li className="rounded-2xl border border-charcoal/10 bg-background/70 px-3 py-2" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
