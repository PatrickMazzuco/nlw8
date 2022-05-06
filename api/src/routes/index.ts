import express from 'express';
import { feedbacksRouter } from './feedbacks';

const router = express.Router();

router.use('/feedbacks', feedbacksRouter);

export default router;
