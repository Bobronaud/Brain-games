import toLaunchGame from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const toGenerateQuestionValue = () => {
  const number = Math.floor(Math.random() * 409);
  return number;
};

const toGetRightAnswer = (questionValue) => {
  let result = 'yes';
  for (let i = 2; i < questionValue; i += 1) {
    if (questionValue % i === 0) {
      result = 'no';
    }
  }
  return result;
};

const brainPrime = () => toLaunchGame(condition, toGenerateQuestionValue, toGetRightAnswer);

export default brainPrime;
