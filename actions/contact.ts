"use server";

import { Resend } from "resend";

type SendResult = { ok: true } | { ok: false; error: string };

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing `RESEND_API_KEY` environment variable");
  }
  return new Resend(apiKey);
}

export const sendMessage = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}): Promise<SendResult> => {
  try {
    const resend = getResendClient();
    if (!data.phone) data.phone = "No phone provided";
    console.log("Sending email with data:", data);

    const { firstName, lastName, email, phone, service, message } = data;

    await resend.emails.send({
      from: "SemiCare <onboarding@resend.dev>",
      to: process.env.TO_EMAIL!,
      subject: `New contact form submission from ${data.firstName} ${data.lastName}`,
      // text: `From: ${data.email}\n\n${data.message}`,
      html: `<div>
      <h1>
        Message from SemiCare web site!
      </h1>
      <p>First name: ${firstName}</p>
      <p>Last name: ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Service: ${service}</p>
      <p>Message: ${message}</p>
    </div>`,
    });
    return { ok: true };
  } catch (error) {
    return { ok: false, error: `Failed to send email. ${error}` };
  }
};
