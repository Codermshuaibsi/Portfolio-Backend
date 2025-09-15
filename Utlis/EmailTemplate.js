// contactEmailTemplate.js
const contactEmailTemplate = (name, email, message) => {
  return `
    <div style="font-family:sans-serif; padding:20px; border:1px solid #ddd; border-radius:10px;">
      <h2 style="color:#3498db;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <br />
      <p>Regards,<br/>Your Website</p>
    </div>
  `;
};

module.exports = contactEmailTemplate;
