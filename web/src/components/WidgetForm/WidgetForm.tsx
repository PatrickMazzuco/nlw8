import { useState } from 'react';
import bugImage from '../../assets/bug.svg';
import ideaImage from '../../assets/idea.svg';
import thoughtImage from '../../assets/thought.svg';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImage,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImage,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [selectedFeedbackType, setSelectedFeedbackType] =
    useState<FeedbackType | null>(null);
  const [wasFeedbackSent, setWasFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setSelectedFeedbackType(null);
    setWasFeedbackSent(false);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {wasFeedbackSent ? (
        <FeedbackSuccessStep onRestartButtonClicked={handleRestartFeedback} />
      ) : (
        <>
          {!selectedFeedbackType ? (
            <FeedbackTypeStep
              onFeedbackTypeSelected={setSelectedFeedbackType}
            />
          ) : (
            <FeedbackContentStep
              onBackButtonClicked={handleRestartFeedback}
              onFeedbackSent={() => setWasFeedbackSent(true)}
              feedbackType={selectedFeedbackType}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{' '}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
