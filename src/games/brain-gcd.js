import toLaunchGame from '../index.js';
import toGetRandomNumber from '../toGetRandomNumber.js';

const condition = 'Find the greatest common divisor of given numbers.';

const toGenerateQuestionValue = () => {
  const rundomFirstNumber = toGetRandomNumber(1, 100);
  const rundomSecondNumber = toGetRandomNumber(1, 100);
  return `${rundomFirstNumber} ${rundomSecondNumber}`;
};

const toGetRightAnswer = (questionValue) => {
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

const brainGcd = () => toLaunchGame(condition, toGenerateQuestionValue, toGetRightAnswer);

export default brainGcd;
