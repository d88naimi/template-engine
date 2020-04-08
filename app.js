const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
class Start {
    // inquire prompt for the development team 
    initialPrompt() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "What is your manager's name?"
                },
                {
                    type: "input",
                    name: "managerID",
                    message: "What is your manager's ID?"
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is your manager's Email?"
                },
                {
                    type: "input",
                    name: "managerOfficeNumber",
                    message: "What is your manager's Office Number?"
                },
                {
                    type: "list",
                    name: "specificRoles",
                    message: "What type of team member would you like to add?",
                    choices: [
                        "Intern",
                        "Engineer",
                        "I am done adding team members"
                    ]
                },
            ])
            .then(data => {
                const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNumber);
                team.push(manager);
                console.log(team);
                console.log(data.specificRoles);
                if (data.specificRoles === "Intern") {
                    this.promptIntern();
                } else if (data.specificRoles === "Engineer") {
                    this.promptEngineer();
                } else {
                    this.finish();
                }
            });
    }
    promptIntern() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is your intern's name?"
                },
                {
                    type: "input",
                    name: "internID",
                    message: "What is your intern's ID?"
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is your intern's Email?"
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What is your intern's School Number?"
                },
                {
                    type: "list",
                    name: "specificRoles",
                    message: "What type of team member would you like to add?",
                    choices: [
                        "Intern",
                        "Engineer",
                        "I am done adding team members"
                    ]
                },
            ])
            .then(data => {
                const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
                console.log(intern);
                team.push(intern);
                console.log(team);
                console.log(data.specificRoles);
                if (data.specificRoles === "Intern") {
                    this.promptIntern();
                } else if (data.specificRoles === "Engineer") {
                    this.promptEngineer();
                } else {
                    this.finish();
                }
            });
    }
    promptEngineer() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is your engineer's name?"
                },
                {
                    type: "input",
                    name: "engineerID",
                    message: "What is your engineer's ID?"
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is your engineer's Email?"
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message: "What is your engineer's Github ?"
                },
                {
                    type: "list",
                    name: "specificRoles",
                    message: "What type of team member would you like to add?",
                    choices: [
                        "Intern",
                        "Engineer",
                        "I am done adding team members"
                    ]
                },
            ])
            .then(data => {
                const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
                console.log(engineer);
                team.push(engineer);
                console.log(team);
                console.log(data.specificRoles);
                if (data.specificRoles === "Intern") {
                    this.promptIntern();
                } else if (data.specificRoles === "Engineer") {
                    this.promptEngineer();
                } else {
                    this.finsih();
                }
            });
    }
    finish() {
        // pass the the teams array to htmlrender 
        //html render passes to output folder 
        
    }

}

const test = new Start;
test.initialPrompt();
console.log(team);
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

