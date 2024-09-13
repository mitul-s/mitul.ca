"use client";

import { format } from "date-fns";

interface LocalTimeDisplayProps {
  date: string;
}

export default function LocalTimeDisplay({ date }: LocalTimeDisplayProps) {
  const localDate = new Date(date);
  const formattedDate = format(localDate, "MMM d, yyyy '@' h:mm a");

  return <time>{formattedDate}</time>;
}
