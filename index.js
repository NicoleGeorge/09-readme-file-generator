const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require('fs');

inquirer
  .prompt([
      { type: "input",
      message: "What is your GitHub username?",
      name: "userName",
      default: "adorkablynicole"
      },

      {type: "input",
      message: "what is your "

      },
      { type: "input", 
      message: "What is your project title?", 
      name: "projectTitle" 
      },
      { type: "input",
      message: "Project Description",
      name: "projectDescription"
      },
      { type: "list",
      message: "Outline your table of contents",
      name: "contents"
      },
      { type: "input",
      message: "outline how this appliation is used.",
      name: "usage"
      },
      { type: "list",
      message: "What license does this app fall under?",
      name: "license",
      default: "ISC",
      choices: [
        "MIT",
        "ISC",
        "GNU"
      ]},
      {type: "input",
      message: "how would you like people to contribute to your project?",
      name: "contribute"
      },
      {type: "input",
      message: "what was the testing process for this project?",
      name: "testing"
      },
      {type: "input",
      message: "Outline any further developments that need to be made.",
      name: "questions"
      },

])

// script outline from:  https://www.npmjs.com/package/inquirer

  .then((answers) => {
    // Use user feedback for... whatever!!
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

const questions = [];

function writeToFile(fileName, data) {}

function init() {}

init();
