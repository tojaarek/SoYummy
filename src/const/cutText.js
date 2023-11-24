const cutText = (title, maxLength) => {
  if (title.length > maxLength) {
    const shorterText = title.slice(0, maxLength);

    if (/\s/.test(title[maxLength - 1])) {
      return shorterText.slice(0, -1) + '...';
    }
    return shorterText + '...';
  }
  return title;
};

export default cutText;
