const inquirer = require("inquirer");
const inquirer = require("chalk");
const fs = require('fs');

inquirer
  .prompt([
      { type: "input",
      message: "What is your GitHub username?",
      name: "userName"
      },
      {type: "input",
      message: "what is your "

      },
      { type: "input", 
      message: "What is the title of your project?", 
      name: "title" 
      },
      { type: "input",
      message: "What is the description of your project?",
      name: "description"
      },
      { type: "list",
      message: "Outline your table of contents",
      name: "contents"
      },
      { type: "input",
      message: "outline how this appliation is used.",
      name: "usage"
      },
      { type: "checkbox",
      message: "What license does this app fall under?",
      name: "stack",
      choices: [
        "MIT",
        "",
        "",
        ""
      ]},


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
