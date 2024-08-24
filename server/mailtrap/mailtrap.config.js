import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv"

dotenv.config();

export const mailtrapClient = new MailtrapClient({ endpoint: process.env.MAILTRAP_ENDPOINT, token: process.env.MAILTRAP_TOKEN });

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};
// const recipients = [
//   {
//     email: "info.theshaik@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "Shaik is Testing Emails from MERN Auth App ",
//     text: "Congrats for sending test email with Mailtrap! Testing Successful. 🎉",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);