const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gujjalayaswanth@gmail.com",
    pass: "rbdl ihie tgwf xier", 
  },
});

