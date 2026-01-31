export const dateToHuman = (date: string) => {
  return new Date(date).toLocaleDateString("en-gb");
};
