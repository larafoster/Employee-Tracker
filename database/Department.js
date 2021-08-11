const cTable = require ('console.table');

class Department {
  constructor (connection, id = 0, name = '') {
    this.connection = connection;
    this.id = id;
    this.name = name;
  }

  setProperties (data) {
    Object.getOwnPropertyNames (this).forEach (property => {
      if (property !== 'connection') {
        this[property] = data[property];
      }
    });
  }

  viewDepartments () {
    this.connection.query (
      "SELECT * FROM department",
      function (err, res) {
        if (err) console.log (err);
        // View departments
        console.log ('\n'); //add vertical space
        console.table (res); //display in table
      }
    );
  }
  newDepartment (departmentName = this.name) {
    this.connection.query (
      'INSERT INTO department (name) VALUES (?)',
      [departmentName],
      function (err, res) {
        if (err) console.log (err);
      }
    );
  }

  updateDepartment () {
    this.connection.query (
      'UPDATE department SET ? WHERE ?',
      {name: this.name},
      {id: this.id},
      function (err, res) {
        if (err) console.log (err);
      }
    );
  }
}

module.exports = Department;
