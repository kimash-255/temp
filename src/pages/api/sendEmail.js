import nodemailer from "nodemailer";
import { IncomingForm } from "formidable-serverless";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const form = new IncomingForm();

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error("Error parsing form data:", err);
          return res
            .status(500)
            .json({ success: false, error: "Failed to parse form data" });
        }

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: process.env.SMTP_SECURE === "true", // SSL enabled
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const mailOptions = {
          from: `${process.env.SENDER_USERNAME}`,
          to: process.env.EMAIL,
          subject: `New Inquiry from ${fields.name}`,
          html: `
            <html>
              <head>
                <style>
                  body {
                    font-family: 'Arial', sans-serif;
                    color: #333;
                  }
                  .container {
                    padding: 20px;
                    border: 1px solid #3498db;
                    border-radius: 8px;
                    background-color: #f8f8f8;
                  }
                  h1 {
                    color: #3498db;
                  }
                  p {
                    margin-bottom: 15px;
                  }
                  .highlight {
                    color: #e74c3c;
                    font-weight: bold;
                  }
                  .attachment-list {
                    list-style-type: none;
                    padding: 0;
                  }
                  .attachment-list li::before {
                    content: "📎 ";
                    margin-right: 5px;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <h1>New Inquiry Received!</h1>
                  
                  <p>Hey Team,</p>
                  
                  <p>We've received a new inquiry from ${
                    fields.name
                  }. Below are the details:</p>
                  
                  <p class="highlight">Contact Information:</p>
                  <ul>
                    <li><strong>Full Name:</strong> ${fields.name}</li>
                    <li><strong>Email:</strong> ${fields.email}</li>
                    <li><strong>Telephone:</strong> ${fields.phone}</li>
                  </ul>
                  
                  <p class="highlight">Message:</p>
                  <p>${fields.message}</p>
                  
                  ${
                    form.openedFiles && Object.keys(form.openedFiles).length > 0
                      ? `
                        <p class="highlight">Attached Files:</p>
                        <ul class="attachment-list">
                          ${Object.values(form.openedFiles)
                            .flat()
                            .map(
                              (file, index) => `
                            <li>${index + 1}. ${
                                file.name || "Unnamed file"
                              }</li>
                          `
                            )
                            .join("")}
                        </ul>
                      `
                      : ""
                  }
                  
                  <p>Best Regards</p>
                </div>
              </body>
            </html>
          `,
          attachments: [],
        };

        // Attach all files to the email
        if (form.openedFiles) {
          Object.values(form.openedFiles).forEach((fileList) => {
            if (Array.isArray(fileList)) {
              fileList.forEach((file) => {
                mailOptions.attachments.push({
                  filename: file.name || "Unnamed file",
                  path: file.path,
                });
              });
            } else {
              mailOptions.attachments.push({
                filename: fileList.name || "Unnamed file",
                path: fileList.path,
              });
            }
          });
        }

        try {
          const info = await transporter.sendMail(mailOptions);
          console.log("Message sent: %s", info.messageId);
          res.status(200).json({ success: true });
        } catch (error) {
          console.error("Error sending email:", error);
          res
            .status(500)
            .json({ success: false, error: "Failed to send email" });
        }
      });
    } catch (error) {
      console.error("Error handling form data:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to handle form data" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
};

export default handler;
