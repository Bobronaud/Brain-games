import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionValue = () => {
  const number = getRandomNumber(2, 409);
  return number;
};

const getRightAnswer = (questionValue) => {
  let result = 'yes';
  for (let i = 2; i < questionValue; i += 1) {
    if (questionValue % i === 0) {
      result = 'no';
    }
  }
  return result;
};

const launchBrainPrime = () => launchGame(condition, generateQuestionValue, getRightAnswer);

export default launchBrainPrime;
