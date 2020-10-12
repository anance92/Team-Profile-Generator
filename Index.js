// Requires
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Team Members Array
const teamArray = [];
// Manager Questions Array
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the employee:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the id number of the employee:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the employee email:'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the office number:'
    },
];
// Engineer Questions Array
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the engineer:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the id number of the engineer:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email of the engineer:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the github username of the engineer:'
    },
];
// Intern Questions Array
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the intern:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the id number of the intern:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email of the intern:'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter the school of the intern:'
    },
];

// Generate Questions for the manager
const promptManager = () => {
    console.log(`
    ==================
    Enter Your Manager
    ==================
    `);
    inquirer.prompt(managerQuestions)
    .then(employeeData => {
        let manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.officeNumber);
        teamArray.push(manager);
        promptTeam();
    })
};

const promptTeam = () => {
        console.log(`
    ====================
    Enter Your Employees
    ====================
    `);

    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: 'What kind of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ])
    .then(answer => {
        if (answer.employeeRole == 'Engineer') {
            promptEngineer();
        }
        if (answer.employeeRole == 'Intern') {
            promptIntern();
        } else if (answer.employeeRole == 'Done') {
            writeToFile('Employee.html',  generateHTML(teamArray));
        }
    });
};

// Generate Questions for the engineers
const promptEngineer = () => {
    console.log(`
    ===================
    Enter Your Engineer
    ===================
    `);
    inquirer.prompt(engineerQuestions)
    .then(employeeData => {
        let engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github);
        teamArray.push(engineer);
        promptTeam();
    })

};

// Generate Questions for the Interns
const promptIntern = () => {
    console.log(`
    =================
    Enter Your Intern
    =================
    `);
    inquirer.prompt(internQuestions)
    .then(employeeData => {
        let intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
        teamArray.push(intern);
        promptTeam();
    })
};

// Function to write HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data, err => {
        if (err) throw err;
    });
};

// Function to initialize program
function init() {
    promptManager();
};

// Function call to initialize program
init();