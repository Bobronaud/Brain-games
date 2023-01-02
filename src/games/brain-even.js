import toLaunchGame from '../index.js';
import toGetRandomNumber from '../toGetRandomNumber.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const toGenerateQuestionValue = () => {
  const number = toGetRandomNumber(1, 101);
  return number;
};

const toGetRightAnswer = (questionValue) => {
  let result;
  if (questionValue % 2 === 0) {
    result = 'yes';
  } else result = 'no';
  return result;
};

const evenGame = () => toLaunchGame(condition, toGenerateQuestionValue, toGetRightAnswer);

export default evenGame;
