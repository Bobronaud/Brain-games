import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Find the greatest common divisor of given numbers.';

const generateQuestionValue = () => {
  const rundomFirstNumber = getRandomNumber(1, 100);
  const rundomSecondNumber = getRandomNumber(1, 100);
  return `${rundomFirstNumber} ${rundomSecondNumber}`;
};

const getRightAnswer = (questionValue) => {
  const numbers = questionValue.split(' ');
  let firstNumber = numbers[0];
  let secondNumber = numbers[1];
  let remainder;
  for (let i = 0; remainder !== 0; i += 1) {
    remainder = firstNumber % secondNumber;
    firstNumber = secondNumber;
    if (remainder !== 0) {
      secondNumber = remainder;
    }
  }
  return secondNumber.toString();
};

const launchBrainGcd = () => launchGame(condition, generateQuestionValue, getRightAnswer);

export default launchBrainGcd;
