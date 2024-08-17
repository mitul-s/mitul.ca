"use client";

import type { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_7LTOQI_Ankvx7Dob3S5r0YU0QNVUH6gVXLU38IjKwX1HQo0NThLxJ22fieYAwNFo"
      }
    >
      <RoomProvider
        id="my-room"
        initialPresence={{
          cursor: { x: 0, y: 0 },
        }}
      >
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
