import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProjectSummary } from "@/types/project";

const projects: ProjectSummary[] = [
  {
    id: "demo-project",
    title: "COSY Studio Demo",
    description: "Three-panel starter workspace with dark mode, design tokens, and preview fallback.",
    updatedAtLabel: "Updated just now"
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="panel-card p-8">
        <p className="mb-3 inline-flex rounded-full bg-terracotta/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rust">
          Starting Blueprint v1.0
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Build, inspect, and preview AI-generated code without ever leaving the studio.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-charcoal/75 dark:text-cream/75">
          COSY Studio now boots with strict TypeScript, Prisma, theme support, a warm brutalist design system, and a visible three-column IDE shell.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className={buttonVariants()} href="/studio/demo-project">
            Open demo studio
          </Link>
          <Link className={cn(buttonVariants({ variant: "secondary" }))} href="/sign-in">
            Open auth shell
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between gap-3 text-sm text-charcoal/70 dark:text-cream/70">
                <span>{project.updatedAtLabel}</span>
                <Link className={cn(buttonVariants({ variant: "secondary" }))} href={`/studio/${project.id}`}>
                  Open
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
