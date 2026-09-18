"use client";

import { track } from "@vercel/analytics";
import { useState } from "react";

const title = "Somebody Save Mitul";
const details = "RSVP: https://partiful.com/e/nfHRrtboDRfOI8NdqCAn";
const location = "All Street Gallery, 77 E 3rd St, New York, NY 10003";

const google = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  title
)}&dates=20261017T230000Z/20261018T020000Z&details=${encodeURIComponent(
  details
)}&location=${encodeURIComponent(location)}`;

const apple = "/rsvp/somebody-save-mitul.ics";

const options = [
  { label: "Google", href: google, service: "google" },
  { label: "Apple", href: apple, service: "apple" },
] as const;

const AddToCalendar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-5 items-center justify-center gap-2 font-[family-name:var(--font-fraunces)] text-[13px] tracking-[-0.02em] sm:text-[14px]">
      {open ? (
        options.map((option, i) => (
          <span key={option.service} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden className="text-[#8a8a8a]">
                ·
              </span>
            )}
            <a
              href={option.href}
              target={option.service === "apple" ? undefined : "_blank"}
              rel="noopener noreferrer"
              onClick={() => track("add_to_calendar", { service: option.service })}
          className="cursor-pointer underline decoration-1 underline-offset-4 transition-colors hover:text-[#ed1717]"
            >
              {option.label}
            </a>
          </span>
        ))
      ) : (
        <button
          onClick={() => {
            setOpen(true);
            track("add_to_calendar_opened");
          }}
          className="underline decoration-1 underline-offset-4 transition-colors hover:text-[#ed1717]"
        >
          Add to calendar
        </button>
      )}
    </div>
  );
};

export default AddToCalendar;
