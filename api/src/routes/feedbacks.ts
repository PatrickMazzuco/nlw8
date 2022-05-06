import express from 'express';
import { PrismaFeedbacksRepository } from '../repositories/prisma/prisma-feedbacks.repository';
import { NodemailerMailService } from '../services/mail-service/nodemailer/nodemailer-mail.service';
import { SubmitFeedbackUseCase } from '../use-cases/submit-feedback.use-case';

const feedbacksRouter = express.Router();

feedbacksRouter.post('/', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailService = new NodemailerMailService();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailService
  );

  await submitFeedbackUseCase.execute({ type, comment, screenshot });

  return res.status(201).send();
});

export { feedbacksRouter };
