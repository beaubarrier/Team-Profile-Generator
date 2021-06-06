
const path = require("path");
const fs = require("fs");

// sets the absolute directory as variable templatesDir, defines root directory as '../src'
const templatesDir = path.resolve(__dirname, "../src");

// log templates to troubleshoot
// console.log("helper file ", templatesDir);

// render function, sets employees as parameter.
const render = employees => {

    // html array holds html template for each employee object
    const html = [];

    // html.push adds filtered employees html template to html array.
    html.push(employees

        // filters through the employee class to return object with Manager roll.    
        .filter(employee => employee.getRole() === "Manager")

        // map calls the function once for each element in the manager(?) array.     
        .map(manager => renderManager(manager)).join("")
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer)).join("")
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern)).join("")
    );


    // passes data from html array to renderMain function.
    return renderMain(html.join(""));
};

// function takes data stored in the class and applys it to the corrosponding html template.
const renderManager = manager => {

    // sets template variable, reads contents of manager.html inside directory specified by templatesDir, use utf8 encoding option.   
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");

    // Runs function to find and replace placeholders in the html. Follows path specified in 'template' variable. looks for "name" placeholder key in html document. changes value of placeholder to data retrieved from manager.getSomething().
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNum());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
};

// function for the main body of html. contains cdn links/html framework.
const renderMain = html => {

    // sets template variable, reads contents of body.html inside directory specified by templatesDir, use utf8 encoding option.   
    const template = fs.readFileSync(path.resolve(templatesDir, "body.html"), "utf8");

    // template (assigned to directory on line above), "team" and value(html array) will be passed to replacePlaceholders function.
    return replacePlaceholders(template, "team", html);
};

// function for finding placeholder text, variables that will be passed in template(path), placeholder(specified in RegExp) and value(contents of html array).
const replacePlaceholders = (template, placeholder, value) => {

    // pattern variable specifies the syntax used to set a placeholder. RegExp matches the specified text with its pattern within the html.
    // "g" tells RegExp to replace all instances of the placeholder text, not stopping at the first instance.
    const pattern = new RegExp("{{ " + placeholder + " }}", "g");

    // replaces data specified in pattern variable, with the value passed in from renderMain function.
    return template.replace(pattern, value);
};

// Exports data as variable render
module.exports = render;