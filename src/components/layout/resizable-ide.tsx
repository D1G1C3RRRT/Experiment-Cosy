"use client";

import { Group, Panel, Separator } from "react-resizable-panels";

import { ChatThread } from "@/components/chat/chat-thread";
import { PromptInput } from "@/components/chat/prompt-input";
import { FileTree } from "@/components/editor/file-tree";
import { HitLCard } from "@/components/editor/hitl-card";
import { InlineActions } from "@/components/editor/inline-actions";
import { MonacoDiff } from "@/components/editor/monaco-diff";
import { DeviceFrame } from "@/components/preview/device-frame";
import { Inspector } from "@/components/preview/inspector";
import { WebContainerPreview } from "@/components/preview/webcontainer-preview";

function ResizeHandle() {
  return <Separator className="mx-2 w-2 rounded-full bg-charcoal/10 transition hover:bg-terracotta/60" />;
}

export function ResizableIDE() {
  return (
    <div className="h-[calc(100vh-11rem)] min-h-[680px]">
      <Group orientation="horizontal">
        <Panel defaultSize={24} id="chat" minSize={20}>
          <div className="flex h-full flex-col gap-4">
            <ChatThread />
            <PromptInput />
          </div>
        </Panel>
        <ResizeHandle />
        <Panel defaultSize={38} id="editor" minSize={30}>
          <div className="flex h-full flex-col gap-4">
            <FileTree />
            <InlineActions />
            <MonacoDiff />
            <HitLCard />
          </div>
        </Panel>
        <ResizeHandle />
        <Panel defaultSize={38} id="preview" minSize={28}>
          <div className="flex h-full flex-col gap-4">
            <DeviceFrame>
              <WebContainerPreview />
            </DeviceFrame>
            <Inspector />
          </div>
        </Panel>
      </Group>
    </div>
  );
}
