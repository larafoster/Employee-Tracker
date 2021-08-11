const Department = require ('./Department.js');
const Role = require ('./Role.js');
const cTable = require ('console.table');

class Employee {
  constructor (
    connection,
    id = 0,
    firstName = '',
    lastName = '',
    roleId = 0,
    managerId = 0
  ) {
    this.connection = connection;
    this.id = id;
    this.first_name = firstName;
    this.last_name = lastName;
    this.role_id = roleId;
    this.manager_id = managerId;
  }

  setProperties (data) {
    Object.getOwnPropertyNames (this).forEach (property => {
      if (property !== 'connection') {
        this[property] = data[property];
      }
    });
  }

  viewEmployees () {
    this.connection.query (
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",
      function (err, res) {
        if (err) console.log (err);
        console.log ('\n');
        console.table (res);
      }
    );
  }

  newEmployee (
    firstName = this.first_name,
    lastName = this.last_name,
    roleId = this.role_id,
    managerId = this.manager_id
  ) {
    this.connection.query (
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
      [firstName, lastName, roleId, managerId],
      function (err, res) {
        if (err) console.log (err);
      }
    );
  }
  // This function will update the db for the current role
  updateEmployee (
    id = this.id,
    firstName = this.first_name,
    lastName = this.last_name,
    roleId = this.role_id,
    managerId = this.manager_id
  ) {
    this.connection.query (
      'UPDATE employee SET ? WHERE ?',
      [
        {
          first_name: firstName,
          last_name: lastName,
          role_id: roleId,
          manager_id: managerId,
        },
        {id: id},
      ],
      function (err, res) {
        if (err) console.log (err);
      }
    );
  }
}

module.exports = Employee;
