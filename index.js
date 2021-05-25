const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


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
    constructor(officeNum) {
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
    constructor(github) {
        this.github = github
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}



class Intern extends Employee {
    constructor(school) {
        this.school = school
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}



// const getName = () => {
//     [
//         {
//             type: 'input',
//             message: "Please enter the employee's name.",
//             name: 'title',
//         },
//     ]
// }




//         .then(answers => {
//     const manager = new Manager(managerName, managerID, managerEmail, officeNum);

//     switch (answers.newEmployeeType) {

//         case "Engineer":
//             addEngineer();
//             break;
//         case "Intern":
//             addIntern();
//             break;
//         default:
//             buildTeam();
//     }


// })






// const writeToFile = (data) =>

//     `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>

// ${data.managerName}
// ${data.engineerName}

// </body>
// </html>

// `

// function init() {

//     Employee()
//         .then((data) => writeFileAsync('teamInfo.html', writeToFile(data)))
//         .then(() => console.log('Congrats! You have successfully created your team file!'))
//         .catch((err) => console.error(err));

// };


// init()