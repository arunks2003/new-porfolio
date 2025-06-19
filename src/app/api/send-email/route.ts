// /app/api/send-email/route.ts
import { Resend } from 'resend';
import VerificationEmail from '@/emails/VerificationEmail';

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, message, email } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Mstry <onboarding@resend.dev>",
      to: "mrakchaudhary2003@gmail.com",
      subject: "Message from Portfolio Contact Form",
      react: VerificationEmail({ name, message, email }),
    });
    console.log('message sent successfully', data);
    return Response.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error("Error sending email", err);
    return Response.json({ success: false }, { status: 500 });
  }
}
