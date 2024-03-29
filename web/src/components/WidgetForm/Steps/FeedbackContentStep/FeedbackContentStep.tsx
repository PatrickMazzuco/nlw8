import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { api } from '../../../../lib/api';
import { CloseButton } from '../../../CloseButton';
import { Loading } from '../../../Loading';
import { ScreenshotButton } from '../../ScreenshotButton';
import { FeedbackType, feedbackTypes } from '../../WidgetForm';

type FeedbackContentStepProps = {
  feedbackType: FeedbackType;
  onBackButtonClicked: () => void;
  onFeedbackSent: () => void;
};

export const FeedbackContentStep = ({
  feedbackType,
  onBackButtonClicked,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleFeedbackSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSendingFeedback(true);

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot,
        comment: feedbackComment,
      });

      setIsSendingFeedback(false);
      onFeedbackSent();
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onBackButtonClicked}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="h-6 w-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleFeedbackSubmit} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(e) => setFeedbackComment(e.target.value)}
        ></textarea>

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTaken={setScreenshot}
          />
          <button
            type="submit"
            disabled={feedbackComment.trim().length === 0 || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:hover:cursor-not-allowed"
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
};
