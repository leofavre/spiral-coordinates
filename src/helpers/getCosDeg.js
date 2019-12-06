export const getCosDeg = deg => {
  var rad = deg * Math.PI / 180;
  return Math.max(-1, Math.min(1, Math.cos(rad)));
};
