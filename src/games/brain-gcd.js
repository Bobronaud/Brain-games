import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Find the greatest common divisor of given numbers.';

const generateQuestionValue = () => {
  const rundomFirstNumber = getRandomNumber(1, 100);
  const rundomSecondNumber = getRandomNumber(1, 100);
  return `${rundomFirstNumber} ${rundomSecondNumber}`;
};

const calculateGcd = (firstNumber, secondNumber) => {
  let remainder;
  let firstDivisor = firstNumber;
  let secondDivisor = secondNumber;
  for (let i = 0; remainder !== 0; i += 1) {
    remainder = firstDivisor % secondDivisor;
    firstDivisor = secondDivisor;
    if (remainder !== 0) {
      secondDivisor = remainder;
    }
  }
  return secondDivisor;
};

const getRightAnswer = (questionValue) => {
  const numbers = questionValue.split(' ');
  const firstNumber = numbers[0];
  const secondNumber = numbers[1];
  const result = calculateGcd(firstNumber, secondNumber);
  return result.toString();
};

const launchBrainGcd = () => launchGame(condition, generateQuestionValue, getRightAnswer);

export default launchBrainGcd;
