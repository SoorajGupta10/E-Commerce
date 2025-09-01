import nodemailer from "nodemailer";

export const sendContactEmail = async (req, res) => {
  const { userName, userEmail, userMessage, userPhone, userSubject } = req.body;

  console.log("Incoming contact form data:", req.body);

  if (!userName || !userEmail || !userMessage) {
    return res.status(400).json({ message: "Name, Email, and Message are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${userName} via Comforty" <${process.env.MAIL_USER}>`,
      to: "soorajgupta777@gmail.com",
      subject: `📩 New Contact Form Submission from ${userName}${userSubject ? " - " + userSubject : ""}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        ${userPhone ? `<p><strong>Phone:</strong> ${userPhone}</p>` : ""}
        ${userSubject ? `<p><strong>Subject:</strong> ${userSubject}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${userMessage}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
};