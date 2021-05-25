const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        getName();
        getId();
        getRole();
    }
}
const getName = () => {
    return inquirer.prompt([
        {
            name: 'name',
            message: 'Please enter the employees name',
            type: 'input',
        }
    ])
};
// class Manager extends Employee {

// }

        // .then(answers => {
        //     const manager = new Manager(managerName, managerID, managerEmail, managerOffice);

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