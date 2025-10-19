const words = [
  "react", "coding", "keyboard", "practice", "speed",
  "accuracy", "developer", "function", "variable", "javascript"
];

export const generateWords = (count = 30) =>
  Array(count)
    .fill(null)
    .map(() => words[Math.floor(Math.random() * words.length)])
    .join(" ");
