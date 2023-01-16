const getRandomNumber = (min, max) => {
  const randomNnumber = Math.random() * (max + 1 - min) + min;
  return Math.floor(randomNnumber);
};

export default getRandomNumber;
