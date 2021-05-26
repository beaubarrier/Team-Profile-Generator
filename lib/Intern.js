const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school)
        this.school = school
    }
    getGithub() {
        return this.school;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Intern