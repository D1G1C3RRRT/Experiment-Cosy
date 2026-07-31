import { AgentStatus } from "@/components/chat/agent-status";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const messages = [
  {
    role: "Planner",
    body: "Break the work into safe, testable steps and keep the diff small."
  },
  {
    role: "Coder",
    body: "Apply the approved changes while the center panel shows the evolving diff in real time."
  }
] as const;

export function ChatThread() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Agent Thread</CardTitle>
        <CardDescription>Prompt once, then inspect the planner, coder, and auditor hand-off.</CardDescription>
        <AgentStatus />
      </CardHeader>
      <CardContent className="space-y-3">
        {messages.map((message) => (
          <div className="rounded-2xl border border-charcoal/10 bg-background/70 p-3" key={message.role}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">{message.role}</p>
            <p className="mt-2 text-sm leading-6">{message.body}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
