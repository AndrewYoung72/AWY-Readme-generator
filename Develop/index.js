// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');




const questionPrompt = () => {
  return inquirer.prompt([
    {
      type: process.argv[2],
      name: "title",
      message: "What is the title of this project?",
    },
    {
      type: "input",
      name: "description",
      message: "What was your motivation for the project, what does it solve?",
    },
    {
      type: "input",
      name: "table",
      message: "List the table of contents for this project.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install the project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide examples and instruction for use",
    },
    {
      type: "input",
      name: "credits",
      message: "List collaborators with links to GitHub profiles",
    },
    {
      type: "input",
      name: "license",
      message: "Is there a license?",
    },
  ])
};

const generateMarkdown = ({ title, description, table, installation, usage, credits, license }) =>
` # Title
  ${title}\n 
  ## Description
  ${description}\n 
  ## Table
  ${table}\n 
  ## Installation
  ${installation}\n
  ## Usage
  ${usage}\n 
  ## Credits
  ${credits}\n 
  ## Lisence
  ${license}\n 
  `;


const init = () => {
  questionPrompt()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// const generateMarkdown = ({ title, descriiption, table, installation, usage, credits, license }) =>
// ` # ${process.argv[2]}\n
//   ## ${process.argv[3]}\n
//   ## ${process.argv[4]}\n
//   ## ${process.argv[5]}\n
//   ## ${process.argv[6]}\n
//   ## ${process.argv[7]}\n
//   ## ${process.argv[8]}\n`;

// TODO: Create a function to initialize app
// const init = () => {
//   questions()
//   .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
//   .then(() => console.log('Successfully wrote to README.md'))
//   .catch((err) => console.error(err));

// }


// Function call to initialize app
// init();
