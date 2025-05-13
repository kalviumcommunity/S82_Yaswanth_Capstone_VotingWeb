const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gujjalayaswanth@gmail.com",
      pass: "yasw yasw yasw yasw"
    }
  });