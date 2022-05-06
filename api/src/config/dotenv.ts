import 'dotenv/config';

const {
  PORT,
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_DEFAULT_SENDER,
  MAIL_SERVER,
  MAIL_PORT,
} = process.env;

const port = PORT ?? 3333;

const emailConfig = {
  username: String(MAIL_USERNAME),
  password: String(MAIL_PASSWORD),
  defaultSender: String(MAIL_DEFAULT_SENDER),
  server: String(MAIL_SERVER),
  port: Number(MAIL_PORT),
};

export { port, emailConfig };
