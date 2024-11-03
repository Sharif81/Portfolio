import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed = 10, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % text.length);
        }
      } else {
        if (displayedText.length < text[index].length) {
          setDisplayedText((prev) => prev + text[index][displayedText.length]);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const interval = setInterval(handleTyping, isDeleting ? speed / 1 : speed);

    return () => clearInterval(interval);
  }, [displayedText, index, isDeleting, speed, text]);

  return (
    <h1 className="text-3xl font-bold text-primary">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypingEffect;
