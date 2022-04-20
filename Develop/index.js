// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
      type: "input",
      name: "title",
      messge: "What is the title of this project?",
    },
    {
      type: "input",
      name: "description",
      messge: "What was your motivation for the project, what does it solve?",
    },
    {
      type: "input",
      name: "table",
      messge: "List the table of contents for this project.",
    },
    {
      type: "input",
      name: "installation",
      messge: "What are the steps required to install the project?",
    },
    {
      type: "input",
      name: "usage",
      messge: "Provide examples and instruction for use",
    },
    {
      type: "input",
      name: "credits",
      messge: "List collaborators witrh links to GitHub profiles",
    },
    {
      type: "input",
      name: "license",
      messge: "Is there a license?",
    },

])
.then((answers) => {
  const readmeContent = generateMarkdown(answers);

  fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
});


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const generateMarkdown = ({ title, descriiption, table, installation, usage, credits, license }) =>
` ${process.argv[2]}\n
  ${process.argv[3]}\n
  ${process.argv[4]}\n
  ${process.argv[5]}\n
  ${process.argv[6]}\n
  ${process.argv[7]}\n
  ${process.argv[8]}\n`;

// TODO: Create a function to initialize app
// const init = () => {
//   questions()
//   .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
//   .then(() => console.log('Successfully wrote to README.md'))
//   .catch((err) => console.error(err));

// }


// Function call to initialize app
init();
