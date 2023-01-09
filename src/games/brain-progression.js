import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'What number is missing in the progression?';

const generateRoundData = () => {
  const progression = [getRandomNumber(1, 20)];
  const progressionStep = getRandomNumber(2, 12);
  const progressionLength = getRandomNumber(6, 10);
  while (progression.length < progressionLength) {
    const nextNumber = progression.at(-1) + progressionStep;
    progression.push(nextNumber);
  }
  const result = [];
  const hiddenItem = getRandomNumber(0, progressionLength);
  const rightAnswer = progression[hiddenItem];
  progression[hiddenItem] = '..';
  result.push(progression.join(' '));
  result.push(rightAnswer.toString());
  return result;
};

const launchBrainProgression = () => launchGame(condition, generateRoundData);

export default launchBrainProgression;
