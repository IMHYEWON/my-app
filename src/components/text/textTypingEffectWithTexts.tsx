import { useTypingEffect } from '@/components/hooks/useTypingEffect';
import React from 'react';

const texts = [
  ". . . . . .",
];

type TextTypingEffectProps = {
  isTypeByLetter?: boolean;
  duration?: number;
};

export const TextTypingEffectWithTexts: React.FC<TextTypingEffectProps> = ({
  isTypeByLetter = false,
  duration = 50,
}) => {
  const [textIndex, setTextIndex] = React.useState(0);
  const textToShow = useTypingEffect(
    texts[textIndex],
    duration,
    isTypeByLetter
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex >= texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    //   setTextIndex(0);
    };
  }, []);

  return (
    <span className="text-black" key={textIndex}>
      {textToShow}
    </span>
  );
};
