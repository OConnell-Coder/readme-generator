const {writeFile} = require('fs');

function generateMarkdown(data) {
  output = `
# ${data.title}

${data.license == 'none' ? "" : `![${data.license}](https://img.shields.io/badge/License-${data.license}-blue)`}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contributions}

## License

${data.license}

## Features

${data.features}

## How to Contribute

I can be reached at:
#### ${data.email}
#### ${data.github}

## Tests

${data.tests}

`;

writeFile('./README.md', output, ()=> console.log('Readme was generated!!!'));
}

module.exports = generateMarkdown;
