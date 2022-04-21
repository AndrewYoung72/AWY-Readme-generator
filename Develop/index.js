// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');




const questionPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
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
    {
      type: "input",
      name: "tests",
      message: "Instructions for running a test.",
    },

    {
      type: "input",
      name: "questions",
      message:"Enter GitHub link to project as well as any images.",
    },

  ])
};

const generateMarkdown = ({ title, description, installation, usage, credits, license, tests, questions }) =>
` # Title
  ${title}\n 

## Description
  ${description}\n 

## Table
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [License](#lisence)

## Installation
  ${installation}\n

## Usage
  ${usage}\n 

## Credits
  ${credits}\n 

## Lisence
  ${license}\n

## Tests
  ${tests}\n 

## Questions
  ${questions}\n 
`;


const init = () => {
  questionPrompt()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();

