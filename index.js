const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


const managerQuestions = () => {
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
            message: "Please enter a the team managers name.",
            choices: ["Engineer", "Intern"],
            name: 'newEmployeeType'
        },
        {
            when: function (response) {
                if (response.newEmployeeType === "Engineer") {
                    return inquirer.prompt([
                        {
                            type: 'input',
                            message: "Please enter a the team manager's name.",
                            name: 'engineerName',
                        },
                    ])

                    // console.log(response.newEmployeeType);
                    // engineerQuestions();
                }
                // return response.newEmployeeType;

            }
        }

    ])

}
// const engineerQuestions = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             message: "Please enter a the team manager's name.",
//             name: 'engineerName',
//         },
//     ])
// }




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



</body>
</html>

`

function init() {

    managerQuestions()

        .then((data) => writeFileAsync('teamInfo.html', writeToFile(data)))
        .then(() => console.log('Congrats! You have successfully created your team file!'))
        .catch((err) => console.error(err));
};

init();
