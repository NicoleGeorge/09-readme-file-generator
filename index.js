const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");
const util = require("util");
const figlet = require('figlet');
const clear = require('clear');

const writeFileAsync = util.promisify(fs.writeFile);


clear();

console.log(
  chalk.greenBright(
    figlet.textSync('README file Generator', { horizonatalLayout: 'full'})
  )
);


// script outline from:  https://www.npmjs.com/package/inquirer

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username? 🤓 ",
      name: "userName",
      validate: function(value) { //validating user input - making sure a username is entered
        if (value.length) {
          return true;
        } else {
          return 'Please enter your GitHub username'
        }
      }
    },
    {
      type: "input",
      message: "What is your GitHub email 📧 ",
      name: "userEmail",
      validate: function(value) { //validating user input - making sure an email is entered
        if (value.length) {
          return true;
        } else {
          return 'Please enter your email address'
        }
      }
    },
    {
      type: "input",
      message: "What is your project title? 📂 ",
      name: "projectTitle",
    },
    {
      type: "list",
      message: "What kind of project is this? 📦 ",
      name: "projectType",
      choices: ["web design", "homework", "personal project", "client work"],
    },
    {
      type: "input",
      message: "Outline the project breif, scope and all relevant details 🗒 ",
      name: "projectDescription",
    },
    {
      type: "input",
      message: "What steps are needed to install this project? 🔌 ",
      name: "projectInstallation",
    },
    {
      type: "input",
      message: "How this appliation is used? 💾 ",
      name: "projectUsage",
    },
    {
      type: "list",
      message: "What license does this app fall under? 🔐 ",
      name: "license",
      default: "ISC",
      choices: ["MIT", "ISC", "GNU", "CLI"],
    },
    {
      type: "input",
      message: "How would you like people to contribute to your project? 📟 ",
      name: "projectContributors",
    },
    {
      type: "input",
      message:
        "Please explain the testing process for this project? (if none, leave blank) ⚙  ",
      name: "projectTests",
    },
    {
      type: "input",
      message: "Outline details for further project developments 🤯 ",
      name: "projectQuestions",
    },
    {
      type: "input",
      message: "Cite any resources used for this project. (ie. stackoverlow.com, udemy.com, a GitHub profile) 📚 ",  
      name: "projectQuestions",
    },
  ]);
}

function createReadMeFile(data) {
  return `
       
# Project Title: 
    ${data.projectTitle}

# Project Type:
    ${data.projectType}

# Project Description:
    ${data.projectDescription}

# Table of Contents:
1. Installation
2. Usage
3. License

## Installation:
    ${data.projectInstallation}

## Usage:
    ${data.projectUsage}

## Contributors
    ${data.projectContributors}

## Testing:
    ${data.projectTests}

# [!follow me on GitHub](![GitHub followers](https://img.shields.io/github/followers/NicoleGeorge?label=Follow%20me%20on%20GitHub&logoColor=%23FF4901&style=social))
# [!Check out my Work](https://img.shields.io/badge/View%20Portfolio-check%20it%20out-%23ffd1d4)](https://${data.userName}.github.io/my-portfolio/)
`;
}

async function init() {
  console.log("Ready, setty...GO write this readme.md file ya'll 🎉 ");
  try {
    const data = await promptUser();

    const text = createReadMeFile(data);

    await writeFileAsync("README.md", text);

    console.log("You have successfully written your README.md file...WOOT-WOOT 🥳");  
  } catch (err) {
    console.log(err);
  }
}
init();
