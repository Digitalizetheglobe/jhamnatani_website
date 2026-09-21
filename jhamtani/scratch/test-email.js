const nodemailer = require("nodemailer");

async function testEmail() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "enquiry@jhamtani.com",
      pass: "Enquiry@#2026",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"Jhamtani Website" <enquiry@jhamtani.com>',
      to: "enquiry@jhamtani.com",
      subject: "Test Email from Nodemailer (Google Workspace)",
      text: "Testing Nodemailer Google Workspace SMTP setup for enquiry@jhamtani.com.",
    });
    console.log("SUCCESS:", info.messageId);
  } catch (err) {
    console.error("ERROR:", err.message || err);
  }
}

testEmail();
