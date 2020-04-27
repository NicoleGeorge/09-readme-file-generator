const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// script outline from:  https://www.npmjs.com/package/inquirer

function promptUser() {
    return inquirer.prompt([
      { type: "input",
      message: ":nerd_face: What is your GitHub username?",
      name: "userName",
      default: "adorkablynicole"
      },
      { type: "input",
      message: ":e-mail: What is your GitHub email",
      name: "userEmail"
      },
      { type: "input", 
      message: ":open_file_folder: What is your project title?", 
      name: "projectTitle" 
      },
      { type: "input",
      message: ":spiral_notepad: Project Description",
      name: "projectDescription"
      },
      {type: "input",
      message: ":electric_plug: Outline steps to install this project",
      name: "projectInstallation"
      },
      { type: "input",
      message: ":floppy_disk: outline how this appliation is used.",
      name: "projectUsage"
      },
      { type: "list",
      message: ":closed_lock_with_key: What license does this app fall under?",
      name: "license",
      default: "ISC",
      choices: [
        "MIT",
        "ISC",
        "GNU"
      ]},
      {type: "input",
      message: ":pager: how would you like people to contribute to your project?",
      name: "projectContributors"
      },
      {type: "input",
      message: ":gear: what was the testing process for this project?",
      name: "projectTests"
      },
      {type: "input",
      message: ":8ball: Submit questions about further development recommendations",
      name: "questions"
      }
    ]);
   }

   function createReadMeFile(answers) {
       return `
       
       # Project Title: 
       ## ${data.projectTitle}

       # Project Description:
       ${data.projectDescription}

        #Table of Contents:
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
        # [![Check out my Work !](https://img.shields.io/badge/View%20Portfolio-check%20it%20out-%23ffd1d4)](https://${data.userName}.github.io/my-portfolio/)
        `
        }
        
        async function init() {
          console.log("hi")
          try {
            const data = await promptUser();
        
            const text = generatereadme(data);
        
            await writeFileAsync("readme.md", text);
        
            console.log("Successfully wrote to index.html");
          } catch (err) {
            console.log(err);
          }
        }
        
        init();
        
        `
   }


//   .then((answers) => {
//     console.log(answers);
//   })

//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }
//   });

const questions = [];

function writeToFile(fileName, data) {}

function init() {}

init();
