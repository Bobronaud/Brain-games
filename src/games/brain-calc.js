import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'What is the result of the expression?';

const calculate = (firstNumber, sing, secondNumber) => {
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
  const randomSing = sings[getRandomNumber(0, sings.length - 1)];
  const rundomFirstNumber = getRandomNumber(1, 100);
  const rundomSecondNumber = getRandomNumber(1, 100);
  const expression = `${rundomFirstNumber} ${randomSing} ${rundomSecondNumber}`;
  result.push(expression);
  const rightAnswer = calculate(rundomFirstNumber, randomSing, rundomSecondNumber);
  result.push(rightAnswer.toString());
  return result;
};

const launchBrainCalcGame = () => launchGame(condition, generateRoundData);

export default launchBrainCalcGame;
