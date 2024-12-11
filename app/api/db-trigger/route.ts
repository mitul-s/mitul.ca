import { NextResponse } from "next/server";
import { startDbListener } from "@/lib/db-listener";

// Start the database listener when the server starts
startDbListener().catch(console.error);

export async function POST(req: Request) {
  // This route is no longer needed, but we'll keep it for backwards compatibility
  return NextResponse.json({ message: "Notification system active" });
}
