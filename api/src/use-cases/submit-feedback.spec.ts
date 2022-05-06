import { CreateFeedbackDTO } from '../repositories/dtos/create-feedback.dto';
import { SubmitFeedbackUseCase } from './submit-feedback.use-case';

const mockCreateFeedback = jest.fn();
const mockSendEmail = jest.fn();

describe('Submit Feedback', () => {
  it('should be able to submit a feedback', async () => {
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      { create: mockCreateFeedback },
      { sendMail: mockSendEmail }
    );

    const feedbackData: CreateFeedbackDTO = {
      type: 'BUG',
      comment: 'Bug description',
      screenshot: 'data:image/png;base64,screenshotData',
    };

    await expect(
      submitFeedbackUseCase.execute(feedbackData)
    ).resolves.not.toThrow();

    expect(mockCreateFeedback).toHaveBeenCalled();
    expect(mockSendEmail).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      { create: mockCreateFeedback },
      { sendMail: mockSendEmail }
    );

    const feedbackData: CreateFeedbackDTO = {
      type: '',
      comment: 'Bug description',
      screenshot: 'data:image/png;base64,screenshotData',
    };

    await expect(submitFeedbackUseCase.execute(feedbackData)).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      { create: mockCreateFeedback },
      { sendMail: mockSendEmail }
    );

    const feedbackData: CreateFeedbackDTO = {
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,screenshotData',
    };

    await expect(submitFeedbackUseCase.execute(feedbackData)).rejects.toThrow();
  });

  it('should not be able to submit a feedback with wrong image format', async () => {
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      { create: mockCreateFeedback },
      { sendMail: mockSendEmail }
    );

    const feedbackData: CreateFeedbackDTO = {
      type: 'BUG',
      comment: 'Bug description',
      screenshot: 'data:image/gif;base64,screenshotData',
    };

    await expect(submitFeedbackUseCase.execute(feedbackData)).rejects.toThrow();
  });
});
