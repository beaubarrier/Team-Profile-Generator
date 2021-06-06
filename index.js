const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const render = require("./lib/helper");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const ghAccountExists = require('gh-account-exists');  -- I tried to have the engineers github user name be checked for validity using this node module. Success was not achieved.

const templatesDir = path.resolve(__dirname, "./dist");

const team = [];

function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the team manager's name.",
            validate: function (value) {
                var valid = isNaN(parseFloat(value));
                return valid || 'Please enter a valid name.';
            },
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the team manager's ID number.",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number.';
            },

        },
        {
            type: "input",
            name: "email",
            message: "Please enter the team manager's email address.",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the team manager's office number.",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number.';
            },
        },
        {
            type: "list",
            name: "newEmployeeType",
            message: "If you would like to add another employee, select that employee type. If finished, select 'Done'.",
            choices: ["Engineer", "Intern", "Done"]
        }
    ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);

            switch (answers.newEmployeeType) {

                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                case "Done":
                    buildTeam();
                    break;
            }
        })
}

function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the engineer's name.",
            validate: function (value) {
                var valid = isNaN(parseFloat(value));
                return valid || 'Please enter a valid name.';
            },

        },
        {
            type: "input",
            name: "id",
            message: "Please enter the engineer's ID number.",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number.';
            },
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the engineer's email address.",
        },
        {
            type: "input",
            name: "github",
            message: "Engineer GitHub Name:",
            // validate: function (value) {
            //     var valid = ghAccountExists(value);
            //     return valid || 'Please enter a valid GitHub username.';
            // }
        },
        {
            type: "list",
            name: "newEmployeeType",
            message: "If you would like to add another employee, select that employee type. If finished, select 'Done'",
            choices: ["Engineer", "Intern", "Done"]
        }
    ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            // console.log(answers.github);
            team.push(engineer)
            switch (answers.newEmployeeType) {

                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                case "Done":
                    buildTeam();
                    break;
                default:
                    buildTeam();
            }
        })
}

function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the intern's name.",
            validate: function (value) {
                var valid = isNaN(parseFloat(value));
                return valid || 'Please enter a valid name.';
            },
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the intern's ID number.",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number.';
            },
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the intern's email address.",
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school.",
            validate: function (value) {
                var valid = isNaN(parseFloat(value));
                return valid || 'Please enter a valid school name.';
            },
        },
        {
            type: "list",
            name: "newEmployeeType",
            message: "If you would like to add another employee, select that employee type. If finished, select 'Done'",
            choices: ["Engineer", "Intern", "Done"]
        }
    ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            // console.log(answers.school);
            team.push(intern)
            switch (answers.newEmployeeType) {

                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                case "Done":
                    buildTeam();
                    break;
                default:
                    buildTeam();
            }
        })
}

const buildTeam = () => {
    fs.writeFile(path.join(templatesDir, 'team.html'), render(team), (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Booyah! You successfully generated your team profile!")
        }
    })
}

promptManager();