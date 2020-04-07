const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, email, id)
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }
    getGithub(git) {
        git = this.github;
        return git;
    }
}

module.exports = Engineer;