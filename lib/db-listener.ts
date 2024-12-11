import { Pool } from "@vercel/postgres";
import { Resend } from "resend";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function startDbListener() {
  const client = await pool.connect();

  try {
    await client.query("LISTEN db_updates");

    client.on("notification", async (msg) => {
      const payload = JSON.parse(msg.payload ?? "");

      console.log("Received database update:", payload);

      try {
        await resend.emails.send({
          from: "Vercel DB Notifications <onboarding@resend.dev>",
          to: process.env.NOTIFICATION_EMAIL as string,
          subject: "Database Update Notification",
          text: `A row was updated in your Vercel Postgres database:\n\nTable: ${
            payload.table
          }\nOld: ${JSON.stringify(
            payload.old,
            null,
            2
          )}\nNew: ${JSON.stringify(payload.new, null, 2)}`,
          html: `<h1>Database Update Notification</h1>
                 <p>A row was updated in your Vercel Postgres database:</p>
                 <h2>Table: ${payload.table}</h2>
                 <h3>Old:</h3>
                 <pre>${JSON.stringify(payload.old, null, 2)}</pre>
                 <h3>New:</h3>
                 <pre>${JSON.stringify(payload.new, null, 2)}</pre>`,
        });

        console.log("Notification email sent");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    });

    console.log("Listening for database updates...");
  } catch (err) {
    console.error("Error setting up database listener:", err);
    client.release();
  }
}
