// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./generateMarkdown")


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
      type: "list",
      name: "license",
      message: "Which license do you wnat for your project?",
      choices: [
        "Apache 2.0 License",
        "Boost Software License 1.0",
        "BSD 3-Clause License",
      ]
    },
    {
      type: "input",
      name: "tests",
      message: "Instructions for running a test.",
    },

    {
      type: "input",
      name: "questions",
      message:"Enter GitHub user link.",
    },
    {
      type: "input",
      name: "email",
      message:"Enter your email address.",
    },
    {
      type: "input",
      name: "github",
      message:"Enter GitHub project link.",
    },

  ])
};

const init = () => {
  questionPrompt()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();

