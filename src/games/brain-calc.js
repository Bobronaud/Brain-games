import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'What is the result of the expression?';

const calculate = (expression) => {
  const expressionAsArray = expression.split(' ');
  const [firstNumber, sing, secondNumber] = expressionAsArray;
  let rightAnswer;
  switch (sing) {
    case '+':
      rightAnswer = Number(firstNumber) + Number(secondNumber);
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
      console.log(`Unknown sing: '${sing}'!`);
  }
  return rightAnswer;
};

const generateRoundData = () => {
  const result = [];
  const sings = ['+', '-', '*'];
  const randomSing = sings[getRandomNumber(0, sings.length)];
  const rundomFirstNumber = getRandomNumber(1, 101);
  const rundomSecondNumber = getRandomNumber(1, 101);
  const expression = `${rundomFirstNumber} ${randomSing} ${rundomSecondNumber}`;
  result.push(expression);
  const rightAnswer = calculate(expression);
  result.push(rightAnswer.toString());
  return result;
};

const launchBrainCalc = () => launchGame(condition, generateRoundData);

export default launchBrainCalc;
