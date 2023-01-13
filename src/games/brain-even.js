import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (questionValue) => {
  let result;
  if (questionValue % 2 === 0) {
    result = true;
  } else result = false;
  return result;
};

const generateRoundData = () => {
  const result = [];
  const number = getRandomNumber(1, 101);
  result.push(number);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  result.push(rightAnswer);
  return result;
};

const launchEvenGame = () => launchGame(condition, generateRoundData);

export default launchEvenGame;
