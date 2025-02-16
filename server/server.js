require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mailer = require("./mailer");

// cors
app.use(express.json());
const corsOptions = {
  origin: "https://ravi-sinhmar.vercel.app",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

// Handling Post req from frontend
app.post("/mail", (req, res) => {
  const { name, email, role, jobDescription, link } = req.body;
  const mailData = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "New Hire Me Inquiry",
    html: `
      <h4>Comapnay/Name: ${name}</h4>
      <h4>Email: ${email}</h4>
      <h4>Your Role: ${role}</h5>
      <h4>Project Description: ${jobDescription}</h4>
      <h4>Website Link: ${link}</h4>
    `,
  };

  mailer.sendMail(mailData, (error, info) => {
    try {
      if(error) {
        res.status(400).json({ success: false, data: null });
      }
      if (info) {
        res.status(200).json({ success: true, data: info.messageId });
      };
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, data: null });
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
