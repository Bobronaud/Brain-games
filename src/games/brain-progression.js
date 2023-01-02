import toLaunchGame from '../index.js';
import toGetRandomNumber from '../toGetRandomNumber.js';

const condition = 'What number is missing in the progression?';

const toGenerateQuestionValue = () => {
  const progression = [toGetRandomNumber(1, 20)];
  const progressionStep = toGetRandomNumber(2, 12);
  const progressionLength = toGetRandomNumber(6, 10);
  while (progression.length < progressionLength) {
    const nextNumber = progression.at(-1) + progressionStep;
    progression.push(nextNumber);
  }
  progression[toGetRandomNumber(0, progressionLength)] = '..';
  return progression.join(' ');
};

const toGetRightAnswer = (questionValue) => {
  const progression = questionValue.split(' ');
  let i = 0;
  let result;
  while (i < progression.length) {
    if (progression[i] === '..') {
      if (i === 0) {
        const stepValue = progression[i + 2] - progression[i + 1];
        result = Number(progression[1]) - stepValue;
      } else if (i === progression.length - 1) {
        const stepValue = progression[i - 1] - progression[i - 2];
        result = Number(progression[i - 1]) + stepValue;
      } else {
        const stepValue = (progression[i + 1] - progression[i - 1]) / 2;
        result = Number(progression[i - 1]) + stepValue;
      }
    }
    i += 1;
  }
  return result.toString();
};

const brainProgression = () => toLaunchGame(condition, toGenerateQuestionValue, toGetRightAnswer);

export default brainProgression;
