// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return "Employee";
      }
}

// const david = new Employee("Foo", 'developer', "test@test.com", 5);
// console.log(david);

module.exports = Employee;