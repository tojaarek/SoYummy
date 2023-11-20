const cutText = (title, maxLength) => {
  if (title.length > maxLength) {
    const truncatedText = title.slice(0, maxLength);

    if (/\s/.test(title[maxLength - 1])) {
      return truncatedText.slice(0, -1) + '...';
    }
    return truncatedText + '...';
  }
  return title;
};

export default cutText;
