"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PromptInput() {
  const [value, setValue] = useState("Build a polished dashboard shell with safe defaults.");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Human-in-the-loop prompt</CardTitle>
        <CardDescription>Enter approves, Escape rejects, and the command palette stays one shortcut away.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <textarea
            className="min-h-28 w-full rounded-2xl border-2 border-charcoal bg-background/80 px-4 py-3 text-sm outline-none ring-0"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          <div className="flex gap-3">
            <Button type="submit">Approve</Button>
            <Button variant="secondary">Reject</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
