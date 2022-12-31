import toLaunchGame from '../index.js';

const condition = 'What is the result of the expression?';
const toGenerateQuestionValue = () => {
  const sings = ['+', '-', '*'];
  const randomSing = sings[Math.floor(Math.random() * 3)];
  const rundomFirstNumber = Math.floor(Math.random() * 11);
  const rundomSecondNumber = Math.floor(Math.random() * 11);
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
