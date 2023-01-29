const {writeFile} = require('fs');

function generateMarkdown(data) {
  output = `
# ${data.title}

${data.license == 'None' ? "" : `![${data.license}](https://img.shields.io/badge/License-${data.license}-blue)`}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Questions](#questions)
- [Tests](#tests)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${data.license}

## Features

${data.features}

## Questions

If you have any questions or would like to contribute, I can be reached at:
#### ${data.email}
#### ${data.github}

## Tests

${data.tests}

`;

writeFile('./README.md', output, ()=> console.log('Readme was generated!!!'));
}

module.exports = generateMarkdown;
