const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("is String ", () => {
        it("Name Should be given a string", () => {
            const manager = new Manager("Richard Hendricks", 1, "rhendricks@fake.com", 1)
            const name = "Richard Hendricks"

            expect(name).toEqual(manager.getName());



        });
        it("Email Should be given a string", () => {
            const manager = new Manager("Richard Hendricks", 1, "rhendricks@fake.com", 1)
            const email = "rhendricks@fake.com"

            expect(email).toEqual(manager.getEmail());



        });
    });
    describe("is number ", () => {
        it("Id should be a number ", () => {
            const id = 1
            const manager = new Manager("Richard Hendricks", 1, "rhendricks@fake.com", 1)

            expect(id).toEqual(manager.getId());
        });
        it("Office number should be a number ", () => {
            const officeNum = 1
            const manager = new Manager("Richard Hendricks", 1, "rhendricks@fake.com", 1)

            expect(officeNum).toEqual(manager.getOfficeNum());


        });
    });
});