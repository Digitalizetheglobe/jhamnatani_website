import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      fullName,
      email,
      phone,
      mobile,
      project,
      projectOfInterest,
      message,
      formName,
      subject,
      ...extraFields
    } = body;

    const customerName = name || fullName || "Not provided";
    const customerEmail = email || "Not provided";
    const customerPhone = phone || mobile || "Not provided";
    const selectedProject = project || projectOfInterest || "N/A";
    const userMessage = message || "N/A";
    const formTitle = formName || subject || "Website Form Submission";

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
    const user = process.env.SMTP_USER || "enquiry@jhamtani.com";
    const pass = process.env.SMTP_PASS || "Enquiry@#2026";
    const toEmail = process.env.TO_EMAIL || "enquiry@jhamtani.com";
    const fromEmail = process.env.FROM_EMAIL || `"Jhamtani Website" <${user}>`;

    const createTransporter = (h: string, p: number, sec: boolean) =>
      nodemailer.createTransport({
        host: h,
        port: p,
        secure: sec,
        auth: { user, pass },
        tls: { rejectUnauthorized: false },
      });

    let transporter = createTransporter(host, port, secure);

    let extraRowsHtml = "";
    if (extraFields && Object.keys(extraFields).length > 0) {
      extraRowsHtml = Object.entries(extraFields)
        .map(([key, val]) => {
          if (val === undefined || val === null || val === "") return "";
          const formattedKey = key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase());
          return `<tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">${formattedKey}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${typeof val === "object" ? JSON.stringify(val) : val}</td>
          </tr>`;
        })
        .join("");
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #191F26; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">Jhamtani Website Enquiry</h2>
          <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">Form Source: ${formTitle}</p>
        </div>
        <div style="padding: 24px;">
          <h3 style="color: #A0725B; margin-top: 0;">Submission Details</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9; width: 35%;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${customerName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${customerEmail}">${customerEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">Phone / Mobile</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:${customerPhone}">${customerPhone}</a></td>
            </tr>
            ${
              selectedProject !== "N/A"
                ? `<tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">Project of Interest</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${selectedProject}</td>
            </tr>`
                : ""
            }
            ${
              userMessage !== "N/A"
                ? `<tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${userMessage}</td>
            </tr>`
                : ""
            }
            ${extraRowsHtml}
          </table>
          <p style="font-size: 12px; color: #888; margin-top: 20px;">This email was automatically generated from website form submission at ${new Date().toLocaleString()}.</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: fromEmail,
      to: toEmail,
      replyTo: customerEmail !== "Not provided" ? customerEmail : undefined,
      subject: `New Lead [${formTitle}]: ${customerName}`,
      html: htmlContent,
    };

    let info;
    try {
      info = await transporter.sendMail(mailOptions);
    } catch (primaryErr: any) {
      console.warn("Primary SMTP transport failed, trying fallback port 587:", primaryErr?.message);
      // Fallback: try port 587 with secure false
      const fallbackTransporter = createTransporter(host, 587, false);
      info = await fallbackTransporter.sendMail(mailOptions);
    }

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error("Nodemailer API route error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
