const Inquirer = require ('inquirer');
const mysql = require ('mysql2');

const Employee = require ('./database/Employee.js');
const Role = require ('./database/Role.js');
const Department = require ('./database/Department.js');

const DB = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'employeeManage_db',
});
const employee = new Employee (DB);
const role = new Role (DB);
const department = new Department (DB);

// This is the entry point of the user interface
function mainMenu () {
  let question = 'Select from the menu?';
  let options = [
    'View All Departments',
    'View All Roles',
    'View All Employees',
    'Add a Department',
    'Add a Role',
    'Add an Employee',
    'Update Employee Role',
    'Exit',
  ];
  Inquirer.prompt ({
    name: 'menu',
    type: 'list',
    message: question,
    choices: options,
  }).then (data => {
    switch (data.menu) {
      case 'View All Departments':
        department.viewDepartments ();
        mainMenu ();
        break;
      case 'View All Roles':
        role.viewRoles ();
        mainMenu ();
        break;
      case 'View All Employees':
        employee.viewEmployees ();
        mainMenu ();
        break;
      case 'Add a Department':
        addDepartment ();
        break;
      case 'Add a Role':
        addRole ();
        break;
      case 'Add an Employee':
        addEmployee ();
        break;
      case 'Update Employee Role':
        updateEmployeeRole ();
        break;
      default:
        exit ();
    }
  });
}

// This function will handle adding a role
function addDepartment () {
  let question = 'What is the name of the department you would like to add?';
  Inquirer.prompt ({
    name: 'department',
    type: 'input',
    message: question,
  }).then (data => {
    department.newDepartment (data.department);
    mainMenu ();
  });
}

// This function will handle adding a role
function addRole () {
  let departments = ['No Department'];
  // First get the list of departments
  DB.query ('SELECT * FROM department', function (err, res) {
    if (err) console.log (err);
    for (let i = 0; i < res.length; i++) {
      if (res[i].name) {
        departments.push (res[i].name);
      }
    }

    // Get the role details
    let questions = [
      'What is the title of the role?',
      'What is the salary?',
      'Select a department for this role:',
    ];
    Inquirer.prompt ([
      {
        name: 'title',
        type: 'input',
        message: questions[0],
      },
      {
        name: 'salary',
        type: 'number',
        message: questions[1],
      },
      {
        name: 'department',
        type: 'list',
        message: questions[2],
        choices: departments,
      },
    ]).then (data => {
      // get the department to tie to
      let departmentId = null;
      for (let i = 0; i < res.length; i++) {
        if (res[i].name === data.department) {
          departmentId = res[i].id;
          break;
        }
      }
      role.createRole (data.title, data.salary, departmentId);
      mainMenu ();
    });
  });
}

// This function will handle adding an employee
function addEmployee () {
  let roles = ['No Role'];
  let managers = ['No Manager'];
  // First get the list of roles
  DB.query ('SELECT * FROM role ', function (err, roleRes) {
    if (err) console.log (err);
    for (let i = 0; i < roleRes.length; i++) {
      if (roleRes[i].title) {
        roles.push (roleRes[i].title);
      }
    }

    // Next get list of possible managers
    DB.query ('SELECT * from employee ', function (err, res) {
      if (err) console.log (err);
      for (let i = 0; i < res.length; i++) {
        if (res[i].first_name) {
          managers.push (res[i].first_name + ' ' + res[i].last_name);
        }
      }

      // Get the employee details
      let questions = [
        `What is the employee's first name?`,
        `What is the employee's last name?`,
        `Select the employee's role:`,
        `Select the employee's manager:`,
      ];
      Inquirer.prompt ([
        {
          name: 'firstName',
          type: 'input',
          message: questions[0],
        },
        {
          name: 'lastName',
          type: 'input',
          message: questions[1],
        },
        {
          name: 'role',
          type: 'list',
          message: questions[2],
          choices: roles,
        },
        {
          name: 'manager',
          type: 'list',
          message: questions[3],
          choices: managers,
        },
      ]).then (data => {
        // get the role to tie to
        let roleId = null;
        for (let i = 0; i < roleRes.length; i++) {
          if (roleRes[i].title === data.role) {
            roleId = roleRes[i].id;
            break;
          }
        }
        // Get the manager to tie to
        let managerId = null;
        for (let i = 0; i < res.length; i++) {
          if (res[i].first_name + ' ' + res[i].last_name === data.manager) {
            managerId = res[i].id;
            break;
          }
        }
        employee.newEmployee (data.firstName, data.lastName, roleId, managerId);
        mainMenu ();
      });
    });
  });
}

function updateEmployeeRole () {
  let roles = ['No Role'];
  let employees = [];
  // First get the list of roles
  DB.query ('SELECT * FROM role ', function (err, roleRes) {
    if (err) console.log (err);
    for (let i = 0; i < roleRes.length; i++) {
      if (roleRes[i].title) {
        roles.push (roleRes[i].title);
      }
    }

    // Next get list of possible managers
    DB.query ('SELECT * from employee ', function (err, res) {
      if (err) console.log (err);
      for (let i = 0; i < res.length; i++) {
        if (res[i].first_name) {
          employees.push (res[i].first_name + ' ' + res[i].last_name);
        }
      }

      // Get the employee details
      let questions = [
        "Who's role would you like to update?",
        'Select their new role:',
      ];
      Inquirer.prompt ([
        {
          name: 'employee',
          type: 'list',
          message: questions[0],
          choices: employees,
        },
        {
          name: 'role',
          type: 'list',
          message: questions[1],
          choices: roles,
        },
      ]).then (data => {
        // get the role to tie to
        let roleId = null;
        for (let i = 0; i < roleRes.length; i++) {
          if (roleRes[i].title === data.role) {
            roleId = roleRes[i].id;
            break;
          }
        }
        // Get the employee to update to
        for (let i = 0; i < res.length; i++) {
          if (res[i].first_name + ' ' + res[i].last_name === data.employee) {
            employee.setProperties (res[i]);
            employee.role_id = roleId;
            employee.updateEmployee ();
            break;
          }
        }
        mainMenu ();
      });
    });
  });
}

function exit () {
  console.log ('Thank you - I hope this app met your expectations!');
  process.exit ();
}
mainMenu ();
