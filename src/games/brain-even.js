import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateQuestionValue = () => {
  const number = getRandomNumber(1, 101);
  return number;
};

const isEven = (questionValue) => {
  let result;
  if (questionValue % 2 === 0) {
    result = 'yes';
  } else result = 'no';
  return result;
};

const getRightAnswer = (questionValue) => {
  const result = isEven(questionValue);
  return result;
};

const launchEvenGame = () => launchGame(condition, generateQuestionValue, getRightAnswer);

export default launchEvenGame;
