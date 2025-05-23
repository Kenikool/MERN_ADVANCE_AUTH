import { MailtrapClient } from "mailtrap";
import { config } from "dotenv";
config();

if (!process.env.MAILTRAP_TOKEN) {
}
export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Kenikool",
};
