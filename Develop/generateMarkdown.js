
// "Apache 2.0 License",
// "Boost Software License 1.0",
// "BSD 3-Clause License",// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Apache 2.0 License") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license == "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license == "BSD 3-Clause License") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache 2.0 License") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license == "Boost Software License 1.0") {
    return "https://www.boost.org/LICENSE_1_0.txt"
  } else if (license == "BSD 3-Clause License") {
    return "https://opensource.org/licenses/BSD-3-Clause"
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "Apache 2.0 License") {
    return "https://opensource.org/osd"
  } else if (license == "Boost Software License 1.0") {
    return "Summary not found"
  } else if (license == "BSD 3-Clause License") {
    return "https://opensource.org/osd"
  }
}

// TODO: Create a function to generate markdown for README


const generateMarkdown = ({ title, description, installation, usage, credits, license, tests, questions, email, github }) =>
` # ${title}\n 
${renderLicenseBadge(license)}

## Description
  ${description}\n 

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

## Installation
  ${installation}\n

## Usage
  ${usage}\n 

## Credits
  ${credits}\n 
  

## License
  ${license}\n

- License Link: ${renderLicenseLink(license)}
- License Definition: ${renderLicenseSection(license)}

## Tests
  ${tests}\n 

## Questions
- GitHub User Link: ${questions}\n 
- Email: ${email}\n
- GitHub Project Link: ${github}\n
`;


module.exports = generateMarkdown;
