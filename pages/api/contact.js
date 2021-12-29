import nodemailer from "nodemailer";

export default async (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
  // console.log(process.env.EMAILUSER, process.env.EMAILPASSWORD);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAILUSER,
      pass: process.env.EMAILPASSWORD,
    },
  });

  try {
    const emailRes = await transporter.sendMail(
      {
        from: email,
        to: "kirubelgirmay21@gmail.com",
        subject: `Portfolio contact form  submission from ${name}`,
        html: `<p> You have a new contact form submission </p> <br>
          <p> <strong>Name: </strong> ${name} </p><br>
          <p> <strong>Email: </strong> ${email} </p><br>
           <p> <strong>Message: </strong> ${message} </p><br>
      
      `,
      },
      function (err, data) {
        if (err) {
          console.log("Error occurs");
        } else {
          console.log("Email sent !!!");
          console.log("Message sent", emailRes.messageId);
          res.status(200).json({ message: "Success" });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
