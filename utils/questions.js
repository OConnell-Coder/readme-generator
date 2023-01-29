
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
        name: 'usage',
        message: 'Usage instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: "Pick what license your project has.",
        choices: ["None", "Academic Free License", "Artistic license", "Boost Software License", "Creative Commons license family", "Educational Community License", "Eclipse Public License", "GNU General Public License family", "ISC", "Microsoft Public License", "MIT", "Mozilla Public License", "Open Software License", "PostgreSQL", "The Unlicense"]
    },
    {
        type: 'input',
        name: 'features',
        message: 'What features does your project have?'
    },
    {
        type: 'input',
        name: 'credits',
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
        message: 'What is your GitHub user link?'
    },
];

module.exports = questions;
