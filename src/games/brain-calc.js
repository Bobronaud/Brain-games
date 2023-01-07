import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'What is the result of the expression?';
const generateQuestionValue = () => {
  const sings = ['+', '-', '*'];
  const randomSing = sings[getRandomNumber(0, sings.length)];
  const rundomFirstNumber = getRandomNumber(1, 101);
  const rundomSecondNumber = getRandomNumber(1, 101);
  return `${rundomFirstNumber} ${randomSing} ${rundomSecondNumber}`;
};

const getRightAnswer = (questionValue) => {
  const expression = questionValue.split(' ');
  const sing = expression[1];
  const firstNumber = Number(expression[0]);
  const secondNumber = Number(expression[2]);
  let rightAnswer;
  switch (sing) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
  }
  return rightAnswer.toString();
};

const launchBrainCalc = () => launchGame(condition, generateQuestionValue, getRightAnswer);

export default launchBrainCalc;
