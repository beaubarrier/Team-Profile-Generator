const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


const newProfile = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Please enter a the team manager's name.",
            name: 'managerName',
        },
        {
            type: 'input',
            message: "Please enter the team manager's empyee ID.",
            name: 'managerID',
        },
        {
            type: 'input',
            message: "Please enter a the team manager's email address.'",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "Please enter a the team manager's office number'.",
            name: 'managerOffice',
        },
        {
            type: 'list',
            message: "Please select a new employee type.",
            choices: ["Engineer", "Intern", "Done"],
            name: 'newEmployeeType'
        },


    ])
        .then(answers => {
            // const manager = new Manager(managerName, managerID, managerEmail, managerOffice);
            // here you can add switch that checks where engineer is selected or Intern is selected 
            switch (answers.newEmployeeType) {

                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }


        })

}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Please enter the engineer's name.",
            name: 'engineerName',
        },
        {
            type: 'input',
            message: "Please enter the engineer's employee ID.",
            name: 'engineerID',
        },
        {
            type: 'input',
            message: "Please enter the engineer's email address.",
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: "Please enter the engineer's GitHub user name.",
            name: 'engineerGithub',
        },
    ])

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

${data.managerName}
${data.engineerName}

</body>
</html>

`

function init() {

    newProfile()
        .then((data) => writeFileAsync('teamInfo.html', writeToFile(data)))
        .then(() => console.log('Congrats! You have successfully created your team file!'))
        .catch((err) => console.error(err));

};


init()