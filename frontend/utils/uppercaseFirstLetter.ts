export const uppercaseFirstLetter = (word: string) => {
  if (!word) return;

  return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;
};
