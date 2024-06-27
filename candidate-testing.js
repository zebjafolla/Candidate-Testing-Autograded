let input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  candidateName = input.question("Please enter your name: ");
  console.log("\n")

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i ++)
  {
    let tempArr = []; 
    tempArr.push(input.question(questions[i])); 
    candidateAnswers[i] = tempArr;
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let totalIncorrect = 0;
  console.log("--------------------------------------")
  for(let i = 0; i < candidateAnswers.length; i++)
    { 
      if (candidateAnswers[i].toString().toLowerCase() != correctAnswers[i].toLowerCase()) /*Please answer my question in comments. Why cant i just convert candidateAnswers[i] directly to lower case here? why does it have to be converted to a string first but candidateAnswers[i] does not? Type of says canAnswers is an object but typeof correctAnswers says its a string yet they are both array items which I think means they would be stored as strings.]*/
      {
        console.log(`Question ${i + 1}: Your answer was ${candidateAnswers[i]}, however the correct answer was ${correctAnswers[i]}. You were wrong.`);
        totalIncorrect += 1;
      }
      else
      {
        console.log(`Question ${i + 1}: You were correct. Your answer was ${candidateAnswers[i]} and the correct answer was ${correctAnswers[i]}. Great job!`);
      }
    }
  console.log("--------------------------------------")
  let grade = candidateAnswers.length - totalIncorrect; //TODO 3.2 use this variable to calculate the candidates score.
  if(grade < 0)
    {
      grade = 0;
    }
  grade = (grade / candidateAnswers.length) * 100;
  if(grade >= 80)  
    {
      console.log(`You have passed the test with a score of ${grade} percent. Congratulations!`)
    }
  else
    {
      console.log(`You have failed the test with a score of ${grade} percent, which is below the pass threshold of 80 percent. Dont give up. Please try again!`)
    }
    console.log();
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello " + candidateName);
   console.log()
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
