const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const path = require('path');



class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}


class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum
    }
    getOfficeNum() {

        return this.officeNum;
    }

    getRole() {
        return "Manager";
    }
}


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github)
        this.github = github
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}



function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Manager Name:"
        },
        {
            type: "input",
            name: "id",
            message: "Manager ID:",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },

        },
        {
            type: "input",
            name: "email",
            message: "Manager Email:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Manager Office Number:",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
        },
        {
            type: "list",
            name: "newEmployeeType",
            message: "Would you like to add an engineer or intern?",
            choices: ["Engineer", "Intern", "Done"]
        }
    ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            console.log(answers.officeNum);
            switch (answers.newEmployeeType) {

                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                case "Done":
                    buildTeam();
            }


        })
}

function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Engineer Name:"
        },
        {
            type: "input",
            name: "id",
            message: "Engineer ID:",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
        },
        {
            type: "input",
            name: "email",
            message: "Engineer Email:"
        },
        {
            type: "input",
            name: "github",
            message: "Engineer GitHub Name:"
        },
        {
            type: "list",
            name: "newEmployeeType",
            message: "Would you like to add another engineer or intern?",
            choices: ["Engineer", "Intern", "Done"]
        }
    ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            console.log(answers.github);

            switch (answers.newEmployeeType) {

                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                case "Done":
                    buildTeam();
            }


        })

}

function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern Name:"
        },
        {
            type: "input",
            name: "id",
            message: "Intern ID:",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
        },
        {
            type: "input",
            name: "email",
            message: "Intern Email:"
        },
        {
            type: "input",
            name: "school",
            message: "Intern School:"
        },
        {
            type: "list",
            name: "newEmployeeType",
            message: "Would you like to add another engineer or intern?",
            choices: ["Engineer", "Intern", "Done"]
        }
    ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            console.log(answers.school);

            switch (answers.newEmployeeType) {

                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                case "Done":
                    buildTeam();
            }


        })
}



const writeToFile = (data) =>

    `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>


${data.engineer.name}

</body>
</html>

`

function init() {

    promptManager()
        .then((data) => writeFileAsync('teamInfo.html', writeToFile(data)))
        .then(() => console.log('Congrats! You have successfully created your team file!'))
        .catch((err) => console.error(err));

};


init()