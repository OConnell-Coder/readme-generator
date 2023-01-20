const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description of your project?"
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation requirements?'
    },
    {
        type: 'input',
        name: 'useage',
        message: 'Useage instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: "Pick what license your project has.",
        choices: ["MIT", "none"]
    },
]).then(ans => {
    console.log(ans);
})