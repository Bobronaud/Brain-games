import readlineSync from 'readline-sync';

const launchGame = (condition, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
