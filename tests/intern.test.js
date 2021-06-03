const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("is String ", () => {

        it("Name Should be given a string", () => {
            const intern = new Intern("Erlich Bachman", 3, "eBachman@fake.com", "Hampshire College")
            const name = "Erlich Bachman"

            expect(name).toEqual(intern.getName());
        });

        it("Email Should be given a string", () => {
            const intern = new Intern("Erlich Bachman", 3, "eBachman@fake.com", "Hampshire College")
            const email = "eBachman@fake.com"

            expect(email).toEqual(intern.getEmail());
        });

        it("school name should be a string ", () => {
            const intern = new Intern("Erlich Bachman", 3, "eBachman@fake.com", "Hampshire College")
            const school = "Hampshire College"

            expect(school).toEqual(intern.getSchool());


        });
    });
    describe("is number ", () => {

        it("Id should be a number", () => {
            const id = 3
            const intern = new Intern("Erlich Bachman", 3, "eBachman@fake.com", "Hampshire College")

            expect(id).toEqual(intern.getId());


        });
    });
});