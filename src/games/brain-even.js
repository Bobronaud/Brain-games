import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (questionValue) => questionValue % 2 === 0;

const generateRoundData = () => {
  const data = [];
  const randomNumber = getRandomNumber(1, 100);
  data.push(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  data.push(correctAnswer);
  return data;
};

const launchEvenGame = () => launchGame(condition, generateRoundData);

export default launchEvenGame;
