import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (questionValue) => {
  let result = 'yes';
  for (let i = 2; i < questionValue; i += 1) {
    if (questionValue % i === 0) {
      result = 'no';
    }
  }
  return result;
};

const generateRoundData = () => {
  const result = [];
  const number = getRandomNumber(2, 409);
  result.push(number);
  const rightAnswer = isPrime(number);
  result.push(rightAnswer);
  return result;
};

const launchBrainPrime = () => launchGame(condition, generateRoundData);

export default launchBrainPrime;
