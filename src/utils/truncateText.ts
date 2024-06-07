export const truncateText = (text: string, charLimit: number) => {
  if (text.length > charLimit) {
    return text.slice(0, charLimit) + `<span style="color: blue">...</span>`;
  }
  return text;
};
