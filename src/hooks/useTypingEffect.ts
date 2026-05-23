import { useState, useEffect } from 'react';

export function useTypingEffect(words: string[], typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setIsPaused(true);
      setTimeout(() => {
        setReverse(true);
        setIsPaused(false);
      }, pauseTime);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime, isPaused]);

  return words[index].substring(0, subIndex);
}
