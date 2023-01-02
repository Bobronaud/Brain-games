import toLaunchGame from '../index.js';
import toGetRandomNumber from '../toGetRandomNumber.js';

const condition = 'What is the result of the expression?';
const toGenerateQuestionValue = () => {
  const sings = ['+', '-', '*'];
  const randomSing = sings[toGetRandomNumber(1, 3)];
  const rundomFirstNumber = toGetRandomNumber(1, 101);
  const rundomSecondNumber = toGetRandomNumber(1, 101);
  return `${rundomFirstNumber} ${randomSing} ${rundomSecondNumber}`;
};

const toGetRightAnswer = (questionValue) => {
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

const brainCalc = () => toLaunchGame(condition, toGenerateQuestionValue, toGetRightAnswer);

export default brainCalc;
