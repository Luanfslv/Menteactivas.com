import { useEffect } from 'react';

declare var fbq: any;

declare global {
    interface Window { fbq: any; }
  }
  
interface TrackingProps {
  currentQuestionNumber: number;
  path: string;
}

const Tracking: React.FC<TrackingProps> = ({ currentQuestionNumber, path }) => {
  useEffect(() => {
    function handleNextQuestionClick() {
      fbq('trackCustom', 'QuestionAdvanced', { questionNumber: currentQuestionNumber + 1 });
    }

    function isOnQuizPage() {
      return window.location.pathname.includes(path);
    }

    function handleBeforeUnload() {
      if (isOnQuizPage()) {
        fbq('trackCustom', 'QuizAbandoned', { questionNumber: currentQuestionNumber });
      }
    }


    if (window.fbq) {
        window.fbq('trackCustom', 'QuestionProgress', {
            questionNumber: currentQuestionNumber
          });
    } else {
      console.warn("Facebook Pixel não inicializado corretamente.");
    }

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [currentQuestionNumber, path]); 

  return null;
}

export default Tracking;
