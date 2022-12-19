#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const number = Math.floor(Math.random() * 101);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else if (userAnswer === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${userName}!`);
        break;
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'`);
        break;
      }
    } else if (number % 2 !== 0) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      } else if (userAnswer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${userName}!`);
        break;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'`);
        break;
      }
    }
    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default evenGame;
