import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (questionValue) => {
  let result = true;
  for (let i = 2; i < questionValue; i += 1) {
    if (questionValue % i === 0) {
      result = false;
    }
  }
  return result;
};

const generateRoundData = () => {
  const result = [];
  const number = getRandomNumber(2, 409);
  result.push(number);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  result.push(rightAnswer);
  return result;
};

const launchBrainPrimeGame = () => launchGame(condition, generateRoundData);

export default launchBrainPrimeGame;
