
// ex-01
// console.log("Hello World!!")

// ex-02
var readlineSync = require('readline-sync');
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
var ageCheck = readlineSync.question("What's my age?")
if (isNaN(ageCheck)){
  console.log("Please enter a number")
}else if (ageCheck!=25){
  console.log("Wrong Answer")
}else{
  console.log("You're correct!")
}