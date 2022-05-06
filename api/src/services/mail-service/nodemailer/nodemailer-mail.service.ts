import nodemailer from 'nodemailer';
import { emailConfig } from '../../../config/dotenv';
import { SendMailDTO } from '../dtos/send-mail.dto';
import { IMailService } from '../mail-service.interface';

const transporter = nodemailer.createTransport({
  host: emailConfig.server,
  port: emailConfig.port,
  auth: {
    user: emailConfig.username,
    pass: emailConfig.password,
  },
});

export class NodemailerMailService implements IMailService {
  async sendMail({ body, subject }: SendMailDTO): Promise<void> {
    await transporter.sendMail({
      from: `Equipe Fedget <${emailConfig.defaultSender}>`,
      to: 'Patrick Mazzuco <patrick.mazzuco@email.com>',
      subject,
      html: body,
    });
  }
}
