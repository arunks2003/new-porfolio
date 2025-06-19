import { Resend } from "resend";
import VerificationEmail from "@/emails/VerificationEmail";

const resend = new Resend(process.env.RESEND_API_KEY!); // the ! tells TS it's defined

export async function sendEmail(
  name: string,
  message: string,
  email: string
) {
  try {
    await resend.emails.send({
      from: "Mstry <onboarding@resend.dev>",   // or your verified domain
      to: 'mrakchaudhary2003@gmail.com',
      subject: "Mstry | Verification Code",
      react: VerificationEmail({
        name,
        message,
        email
      }),
    });
    return { success: true, message: "Email sent" };
  } catch (err) {
    console.error("Error sending email", err);
    return { success: false, message: "Failed to send email" };
  }
}
