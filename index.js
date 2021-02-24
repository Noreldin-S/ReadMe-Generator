// imports
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown")
const fs = require("fs"); 

// Questions asked to the user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "UserName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },

  {
    type: "input",
    message: "What is the title for your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Please give description of your project.",
    name: "Description",
  },
  {
    type: "input",
    message: "What necessary dependencies must be installed to run this app?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What is this app used for?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What license was used for this README?",
    name: "License",
  },

  {
    type: "input",
    message: "Please add contributors",
    name: "Contributor",
  },
  {
    type: "input",
    message: "What command do you use to test this App?",
    name: "Test",
  }
];

// Writing to a file 
function writeToFile(fileName, data) {

  fs.writeFile("./readme-demo/"+fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log ("Successfully wrote: " + fileName);
  })
  
  }

// initialization function

function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown(data));
  })
}



// run the app
init();