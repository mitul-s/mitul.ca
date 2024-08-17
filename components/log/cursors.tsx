"use client";

import { useOthers, useMyPresence } from "@liveblocks/react/suspense";

const COLORS = [
  "#E57373",
  "#9575CD",
  "#4FC3F7",
  "#81C784",
  "#FFF176",
  "#FF8A65",
  "#F06292",
  "#7986CB",
];

const Cursors = () => {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence();
  const userCount = others.length;
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center z-[1000] isolate"
      onPointerMove={(event) => {
        // Update the user cursor position on every pointer move
        updateMyPresence({
          cursor: {
            x: Math.round(event.clientX),
            y: Math.round(event.clientY),
          },
        });
      }}
      onPointerLeave={() =>
        // When the pointer goes out, set cursor to null
        updateMyPresence({
          cursor: null,
        })
      }
    >
      {cursor
        ? `${cursor.x} × ${cursor.y}`
        : "Move your cursor to broadcast its position to other people in the room."}

      {
        /**
         * Iterate over other users and display a cursor based on their presence
         */
        others.map(({ connectionId, presence }) => {
          if (presence.cursor === null) {
            return null;
          }

          return (
            <Cursor
              key={`cursor-${connectionId}`}
              // connectionId is an integer that is incremented at every new connections
              // Assigning a color with a modulo makes sure that a specific user has the same colors on every clients
              color={COLORS[connectionId % COLORS.length]}
              x={presence.cursor.x}
              y={presence.cursor.y}
            />
          );
        })
      }
    </div>
  );
};

export default Cursors;

// import React, { useMemo } from "react";
// import { useRouter } from "next/router";

/**
 * This file shows how to add basic live cursors on your product.
 */

// function Example() {
//   /**
//    * useMyPresence returns the presence of the current user and a function to update it.
//    * updateMyPresence is different than the setState function returned by the useState hook from React.
//    * You don't need to pass the full presence object to update it.
//    * See https://liveblocks.io/docs/api-reference/liveblocks-react#useMyPresence for more information
//    */

//   /**
//    * Return all the other users in the room and their presence (a cursor position in this case)
//    */
//   const others = useOthers();

//   return (
//     // <main className={styles.container}>
//     //   <div className={styles.text}>

//       </div>

//     </main>
//   );
// }

// export default function Page() {
//   const roomId = useExampleRoomId("nextjs-live-cursors");

//   return (
//     <RoomProvider
//       id={roomId}
//       /**
//        * Initialize the cursor position to null when joining the room
//        */
//       initialPresence={{
//         cursor: null,
//       }}
//     >
//       <Example />
//     </RoomProvider>
//   );
// }

// export async function getStaticProps() {
//   const API_KEY = process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY;
//   const API_KEY_WARNING = process.env.CODESANDBOX_SSE
//     ? `Add your public key from https://liveblocks.io/dashboard/apikeys as the \`NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY\` secret in CodeSandbox.\n` +
//       `Learn more: https://github.com/liveblocks/liveblocks/tree/main/examples/nextjs-live-cursors#codesandbox.`
//     : `Create an \`.env.local\` file and add your public key from https://liveblocks.io/dashboard/apikeys as the \`NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY\` environment variable.\n` +
//       `Learn more: https://github.com/liveblocks/liveblocks/tree/main/examples/nextjs-live-cursors#getting-started.`;

//   if (!API_KEY) {
//     console.warn(API_KEY_WARNING);
//   }

//   return { props: {} };
// }

// /**
//  * This function is used when deploying an example on liveblocks.io.
//  * You can ignore it completely if you run the example locally.
//  */
// function useExampleRoomId(roomId: string) {
//   const { query } = useRouter();
//   const exampleRoomId = useMemo(() => {
//     return query?.exampleId ? `${roomId}-${query.exampleId}` : roomId;
//   }, [query, roomId]);

//   return exampleRoomId;
// }

type Props = {
  color: string;
  x: number;
  y: number;
};

const Cursor = ({ color, x, y }: Props) => {
  return (
    <svg
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      width="24"
      height="36"
      viewBox="0 0 24 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Cursor</title>
      <path
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
        fill={color}
      />
    </svg>
  );
};
