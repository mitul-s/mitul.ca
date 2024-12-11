import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Received database update:", body);

  try {
    const { data, error } = await resend.emails.send({
      from: "Vercel DB Notifications <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL as string,
      subject: "Database Update Notification",
      text: `A row was updated in your Vercel Postgres database:\n\nTable: ${
        body.table
      }\nOld: ${JSON.stringify(body.old, null, 2)}\nNew: ${JSON.stringify(
        body.new,
        null,
        2
      )}`,
      html: `<h1>Database Update Notification</h1>
             <p>A row was updated in your Vercel Postgres database:</p>
             <h2>Table: ${body.table}</h2>
             <h3>Old:</h3>
             <pre>${JSON.stringify(body.old, null, 2)}</pre>
             <h3>New:</h3>
             <pre>${JSON.stringify(body.new, null, 2)}</pre>`,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Notification sent", id: data?.id });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
