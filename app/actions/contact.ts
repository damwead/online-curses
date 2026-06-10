"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  const { error } = await resend.emails.send({
    from: "Online Curses <onboarding@resend.dev>",
    to: "damwead@yahoo.com",
    replyTo: data.email,
    subject: `Online Curses™ — Message from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
  });

  if (error) throw new Error(error.message);
}
