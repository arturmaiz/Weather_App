export const convertFtoC = fahrenheit => {
  let fTemp = fahrenheit;
  const fToCel = Math.floor(((fTemp - 32) * 5) / 9);
  return fToCel;
};
