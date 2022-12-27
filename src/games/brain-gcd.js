import toLaunchGame from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const toGenerateQuestionValue = () => {
  const rundomFirstNumber = Math.floor(Math.random() * 101);
  const rundomSecondNumber = Math.floor(Math.random() * 101);
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
