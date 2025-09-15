// sendEmail.js
const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, htmlContent) => {
   try {
      // Create transporter
      const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: process.env.EMAIL_USER,      // your email
            pass: process.env.EMAIL_PASS,   // app password, not your Gmail password
         },
      });

      // Send email
      const info = await transporter.sendMail({
         from: '"Your Website" <youremail@gmail.com>',
         to: to,
         subject: subject,
         html: htmlContent,
      });

      console.log("Email sent:", info.messageId);
      return true;
   } catch (error) {
      console.error("Error sending email:", error);
      return false;
   }
};

module.exports = sendEmail;
