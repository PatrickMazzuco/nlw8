import { IFeedbacksRepository } from '../repositories/feedbacks-repository.interface';
import { IMailService } from '../services/mail-service/mail-service.interface';
import { SubmitFeedbackDTO } from './dtos/submit-feedback.dto';

export class SubmitFeedbackUseCase {
  constructor(
    private readonly feedbacksRepository: IFeedbacksRepository,
    private readonly mailService: IMailService
  ) {}

  async execute({ type, comment, screenshot }: SubmitFeedbackDTO) {
    await this.feedbacksRepository.create({ type, comment, screenshot });

    if (!type) throw new Error('Field type is required');
    if (!comment) throw new Error('Field comment is required');
    if (screenshot && !screenshot.startsWith('data:image/png;base64'))
      throw new Error('Invalid screenshot format');

    await this.mailService.sendMail({
      subject: 'Novo feedback',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color:#111;">',
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `<img src="${screenshot}"/>`,
        '</p>',
      ].join('\n'),
    });
  }
}
