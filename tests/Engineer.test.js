const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("is String ", () => {

        it("Name Should be given a string", () => {
            const engineer = new Engineer("Jamal Gilfoyle", 2, "jgilfoyle@fake.com", "gilfoyleRulezz")
            const name = "Jamal Gilfoyle"

            expect(name).toEqual(engineer.getName());
        });

        it("Email Should be given a string", () => {
            const engineer = new Engineer("Jamal Gilfoyle", 2, "jgilfoyle@fake.com", "gilfoyleRulezz")
            const email = "jgilfoyle@fake.com"

            expect(email).toEqual(engineer.getEmail());
        });

        it("github user name should be a string ", () => {
            const github = "gilfoyleRulezz"
            const engineer = new Engineer("Jamal Gilfoyle", 2, "jgilfoyle@fake.com", "gilfoyleRulezz")

            expect(github).toEqual(engineer.getGithub());


        });
    });
    describe("is number ", () => {

        it("Id should be a numberr ", () => {
            const id = 2
            const engineer = new Engineer("Jamal Gilfoyle", 2, "jgilfoyle@fake.com", "gilfoyleRulezz")

            expect(id).toEqual(engineer.getId());


        });
    });
});