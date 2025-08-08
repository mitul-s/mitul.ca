import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { entry } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Guestbook <hi@daybloom.app>",
      to: ["mitulxshah@gmail.com"],
      subject: "New Submission!",
      react: await EmailTemplate({ entry }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
