const firstLetterUpperCase = (string) => {
  const term = string.toLowerCase().trim();
  return term.charAt(0).toUpperCase() + term.slice(1);
};

export default firstLetterUpperCase;
