export const calculateWPM = (typedText, originalText, minutes) => {
  const wordsTyped = typedText.trim().split(/\s+/).length;
  return Math.round(wordsTyped / minutes);
};
