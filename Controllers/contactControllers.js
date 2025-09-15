const sendEmail = require("../Utlis/SendMail");
const contactEmailTemplate = require("../Utlis/EmailTemplate");


async function Email(req, res) {
    const { name, email, message } = req.body;

    const html = contactEmailTemplate(name, email, message);

    const isSent = await sendEmail("heyshuaib43@gmail.com", `New Contact Form: ${message}`, html);

    if (isSent) {
        res.status(200).json({ message: "Email sent successfully!" });
    } else {
        res.status(500).json({ message: "Failed to send email." });
    }
}

module.exports = { Email };