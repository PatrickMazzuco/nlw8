import { CloseButton } from '../../../CloseButton';
import { FeedbackType, feedbackTypes } from '../../WidgetForm';

type FeedbackTypeStepProps = {
  onFeedbackTypeSelected: (feedbackType: FeedbackType) => void;
};

export const FeedbackTypeStep = ({
  onFeedbackTypeSelected,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, { title, image }]) => (
          <button
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypeSelected(key as FeedbackType)}
            key={key}
            type="button"
          >
            <img src={image.source} alt={image.alt} />
            <span>{title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
