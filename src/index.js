import readlineSync from 'readline-sync';

const toLaunchGame = (condition, toGenerateQuestionValue, toGetRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  let i = 0;
  while (i < 3) {
    const currentQuestionValue = toGenerateQuestionValue();
    console.log(`Question: ${currentQuestionValue}`);
    const currentRightAnswer = toGetRightAnswer(currentQuestionValue);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === currentRightAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== currentRightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currentRightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default toLaunchGame;
