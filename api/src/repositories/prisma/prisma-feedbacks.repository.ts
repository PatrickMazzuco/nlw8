import { prisma } from '../../prisma';
import { CreateFeedbackDTO } from '../dtos/create-feedback.dto';
import { IFeedbacksRepository } from '../feedbacks-repository.interface';

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({
    type,
    comment,
    screenshot,
  }: CreateFeedbackDTO): Promise<void> {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
