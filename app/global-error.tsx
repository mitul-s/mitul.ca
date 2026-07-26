"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-start gap-y-2 p-8">
        <p>something broke on my end.</p>
        <button
          onClick={reset}
          className="underline cursor-pointer w-fit"
          type="button"
        >
          try again
        </button>
      </body>
    </html>
  );
}
