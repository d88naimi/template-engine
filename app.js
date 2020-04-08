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
                team.push(intern);
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
                team.push(engineer);

                if (data.specificRoles === "Intern") {
                    this.promptIntern();
                } else if (data.specificRoles === "Engineer") {
                    this.promptEngineer();
                } else {
                    this.finish();
                }
            });
    }
    finish() {
        console.log("Processing");
        // console.log(team);
        // fs write file to team.html
        // pass the the team array to render
        fs.writeFileSync(outputPath, render(team), "utf-8");
    }
}

const begin = new Start;
begin.initialPrompt();

