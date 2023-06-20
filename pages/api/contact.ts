import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Initializing nodemailer with settings
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    secure: true,
  });

  // Configuring Mail Data
  const mailData = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `Inquiry from ${req.body.firstName + " " + req.body.lastName}`,
    html: `<p>Hello</p>
    <p>${req.body.firstName + " " + req.body.lastName} has contacted.</p>
    <p>Message: ${req.body.message}</p>

    <p>The contact details of the applicant are as follows:</p>
    <p>Contact Number: ${req.body.phone} </p>
    <p>Contact Email: ${req.body.email} </p>

    <p> Regards, </p>
    <p> Star Group </p>
    `,
  };
  

  // Sending the email, followed by status code.
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
  res.send(null);
}
