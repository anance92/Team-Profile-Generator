// Requires
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateHTML = require('./src/generateHTML');

// Questions Array
const questions = [
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
        type: 'checkbox',
        name: 'role',
        message: 'Please choose the role of the employee:',
        choices: ['Manager', 'Engineer', 'Intern']
    },
]

// Generate Questions
const promptTeam = teamData => {
    console.log(`
====================
Enter Your Employees
====================
`);
// If there's no 'employees' array property, creates one
if (!teamData.employees) {
    teamData.employees = [];
}
return inquirer.prompt(questions)
.then(employeeData => {
    teamData.employees.push(employeeData);
    if (employeeData.confirmAddEmployee) {
        return promptTeam(teamData);
    } else {
        return teamData;
    }
}).then(answers => {
    const html = generateHTML(answers);
    writeToFile('employees.html', html);
});
};

// Function to write HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data, err => {
        if (err) throw err;
    });
};

// Function to initialize program
function init() {
    promptTeam();
};

// Function call to initialize program
init();