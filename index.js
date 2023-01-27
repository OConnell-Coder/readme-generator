const {prompt} = require('inquirer');
const {questions, markdown} = require('./utils');

prompt(questions).then(markdown);

