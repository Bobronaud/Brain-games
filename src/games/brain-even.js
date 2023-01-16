import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (questionValue) => questionValue % 2 === 0;

const generateRoundData = () => {
  const result = [];
  const number = getRandomNumber(1, 100);
  result.push(number);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  result.push(rightAnswer);
  return result;
};

const launchEvenGame = () => launchGame(condition, generateRoundData);

export default launchEvenGame;
