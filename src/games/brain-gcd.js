import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Find the greatest common divisor of given numbers.';

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

const generateRoundData = () => {
  const result = [];
  const rundomFirstNumber = getRandomNumber(1, 100);
  const rundomSecondNumber = getRandomNumber(1, 100);
  const question = `${rundomFirstNumber} ${rundomSecondNumber}`;
  result.push(question);
  const rightAnswer = calculateGcd(rundomFirstNumber, rundomSecondNumber);
  result.push(rightAnswer.toString());
  return result;
};

const launchBrainGcdGame = () => launchGame(condition, generateRoundData);

export default launchBrainGcdGame;
