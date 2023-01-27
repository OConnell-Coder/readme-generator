const questions = [
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
    {
        type: 'input',
        name: 'features',
        message: 'What features does your project have?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Does your project require any testing?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub link?'
    },
];

module.exports = questions;