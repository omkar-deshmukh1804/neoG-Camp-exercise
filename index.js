
// ex-01
// console.log("Hello World!!")

// ex-02
var readlineSync = require('readline-sync');
let score = {
  highScore : 4,
  score: 0
}
// var userName = readlineSync.question("Please enter your name")
// console.log(userName)

//ex-03
// var userName = readlineSync.question("Please enter your name")
// let welcomeString = userName + " " + "Welcome"
// console.log(welcomeString)

//ex-04
// var userName = readlineSync.question("Please enter your name")
// console.log(`Hi ${userName}. Welcome to NeoG Camp`)

//ex-05
// var ageCheck = readlineSync.question("What's my age?")
// if (isNaN(ageCheck)){
//   console.log("Please enter a number")
// }else if (ageCheck!=25){
//   console.log("Wrong Answer")
// }else{
//   console.log("You're correct!")
// }

//ex-06
// var cityCheck = readlineSync.question("What is my home city?")
// let score = 0
// if(!isNaN(cityCheck)){
//   console.log("Please enter city name in AlphaNumeric Format only.")
// }else if (cityCheck.toLowerCase()=='mumbai'){
//   score+=1
//   console.log("Correct Answer!")
//   console.log("Your Score is:" + score)
  
// }else {
//   console.log("Wrong Answer")
// }

//ex-07
// var num1 = readlineSync.question("Please enter the first number: ")
// var num2 = readlineSync.question("Please enter the second number: ")
// function add(num1, num2){
//   return Number(num1) + Number(num2)
// }

// console.log(add(num1, num2))

//ex-08
// let qCheck = readlineSync.question("What is 2+2?")
// const answer = 4

// function check(qCheck, answer){
//   if(isNaN(qCheck)){
//     console.log("Please enter a number.")
//   }else if(Number(qCheck)===answer){
//     score=+1
//     console.log("You're correct! Your score is: ", score)
//   }else{
//     console.log("You are wrong")
//   }
// }

// check(qCheck, answer)

//ex-09
// for(let i=0; i<5; i++){
//   console.log("Omkar ", i+1)
// }

//home work
// let starNum = readlineSync.question("Please enter a number")
// let starString = ""
// let starString2 = ""

// function printStars(starNum){
//   for(let i=1; i<=starNum; i++){
//     for(let j=0; j<i;j++){
//       starString += "*"
//     }
//     starString += "\n"
//   }
//   console.log(starString)
// }

// function printStarsInvert(starNum){
//   for(let i=starNum; i>0; i--){
//     for(j=i; j>0;j--){
//       starString2 += "*"
//     }
//   starString2 += "\n"
//   }
//   console.log(starString2)
// }

// printStars(starNum)
// printStarsInvert(starNum)

//ex-10
// var groceryList = ['cake', 'banana', 'bread', 'eggs', 'milk']
// console.log(groceryList[0])
// console.log(groceryList[2])
// console.log(groceryList[4])

//ex-11
// for(let i=0; i<groceryList.length;i++){
//   console.log(groceryList[i])
// }

//ex-12
// let superHeroObj = 
//   [
//     {
//       name : "Superman",
//       abilities : "flying"
//     },
//     {
//       name : "Batman",
//       abilities : "speed"
//     }
    
//   ]

// console.log(superHeroObj)

//ex-13
let questionObject = [
  {
    question: "Who is my favorite superhero?",
    answer: "Dhruv"
  },
  questionTwo = {
    question: "Which is my favorite sad song?",
    answer: "Channa Meraya"
  },
  {
    question: "Who is my favorite color?",
    answer: "blue"
  },
  questionTwo = {
    question: "Which bike I own?",
    answer: "xpulse"
  }
]

// console.log(questionObject)

//ex-14-15
function quizStart (){
  questionObject.map((item, index)=>{
    let answer = readlineSync.question(item.question)
    if (answer.toLowerCase()!=item.answer.toLowerCase()){
      console.log("You are wrong!")
    }else{
      score.score++;
      console.log("You are correct!")
    }
  })
  console.log("Final Score:", score.score)
  console.log("High Score: ", score.highScore)
}

quizStart()


