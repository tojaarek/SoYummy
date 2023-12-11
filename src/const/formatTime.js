const formatTime = time => {
  const hasMin = time.includes('min') ? time : `${time} min`;
  return hasMin;
};

export default formatTime;
