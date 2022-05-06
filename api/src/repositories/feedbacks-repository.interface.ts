import { CreateFeedbackDTO } from './dtos/create-feedback.dto';

export interface IFeedbacksRepository {
  create(feedback: CreateFeedbackDTO): Promise<void>;
}
