export const calculateAccuracy = (typedText, originalText) => {
  const correct = typedText
    .split("")
    .filter((char, i) => char === originalText[i]).length;
  return Math.round((correct / originalText.length) * 100);
};
