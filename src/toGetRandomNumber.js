const toGetRandomNumber = (min, max) => {
  const randomNnumber = Math.random() * (max - min) + min;
  return Math.floor(randomNnumber);
};

export default toGetRandomNumber;
