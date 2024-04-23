import React, { useState, useEffect } from 'react';

const useScrollProgress = () => {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollCompletion);

    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;