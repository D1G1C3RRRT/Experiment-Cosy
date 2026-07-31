import { ResizableIDE } from "@/components/layout/resizable-ide";

export default function StudioPage({
  params
}: {
  params: { projectId: string };
}) {
  return (
    <div className="space-y-5">
      <div className="panel-card flex items-center justify-between gap-4 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">Project</p>
          <h1 className="font-display text-2xl font-semibold">{params.projectId}</h1>
        </div>
        <p className="max-w-xl text-sm leading-6 text-charcoal/75 dark:text-cream/75">
          The studio keeps chat, diff, and preview aligned so generated changes remain inspectable before approval.
        </p>
      </div>
      <ResizableIDE />
    </div>
  );
}
