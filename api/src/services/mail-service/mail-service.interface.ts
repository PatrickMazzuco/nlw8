import { SendMailDTO } from './dtos/send-mail.dto';

export interface IMailService {
  sendMail(data: SendMailDTO): Promise<void>;
}
