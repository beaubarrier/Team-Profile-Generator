const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("is String ", () => {
        it("Name Should be given a string", () => {
            const employee = new Employee("employeeName", 1, "employeeEmail")

            const name = "employeeName"

            expect(name).toEqual(employee.getName());



        });
        it("Email Should be given a string", () => {
            const employee = new Employee("employeeName", 1, "employeeEmail")

            const email = "employeeEmail"
            expect(email).toEqual(employee.getEmail());



        });
    });
    describe("is number ", () => {
        it("Id should be a numberr ", () => {
            const id = 1
            const employee = new Employee("employeeName", 1, "employeeEmail")

            expect(id).toEqual(employee.getId());


        });
    });

});