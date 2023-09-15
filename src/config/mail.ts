import nodemailer from "nodemailer";

let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'jesusgpe.0497@gmail.com',
      pass: 'tuhcszpjwzsoglul'
    }
 });

 export default transport;