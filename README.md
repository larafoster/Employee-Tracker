# EMPLOYEE TRACKER
  
  ## Description   
  Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. This application is a command-line tool to manage a company's employee database, using Node.js, Inquirer, and MySQL.


  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Links](#links)
  - [Contribute](#contribute)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  Once you clone this repository, you will need to follow these steps:
  1. Connect to your mysql server. Open the index file and change the db password.
  2. In your terminal, you will need to cd into the database folder and source the sql files.
  3. Cd back to the path containing the index file and install the node modules, by running npm install.
  4. To start the app, type 'node index' in the terminal.
  
  ## Usage 
   Once your node modules are installed, simply type 'node index' into the terminal and proceed through the questions. You will be able to View All Departments, Roles and Employees. You will also be able to add a new department, role or employee and also update the role for a specific employee.   


  ### Links
  Project Links:
  - [Github Repo](https://github.com/larafoster/Employee-Tracker) 

  View this app in motion:
  - [video of inquirer prompts](https://drive.google.com/file/d/1TTOMuoW9mRnOX2sVK0OPlDTpLsQ4n0eQ/view)

  Screenshots of app:
  - [img of inquirer prompts](./assets/em-tracker.png)

  ## Credits 
  This project is created with the following technologies:
  - [Node.js](https://nodejs.org/en/) 
  - [Inquirer.js](https://www.npmjs.com/package/inquirer) 
  - [Console.Table](https://www.npmjs.com/package/console.table) 
  - [Mysql](https://dev.mysql.com/doc/) 

  ***
 The code for this project was researched extensively. Here are a few of the tutorials I found helpful:

- [database schema](https://github.com/datacharmer/test_db)     

- [mysql JOIN](https://learnsql.com/blog/sql-joins-made-easy/)     

- [mysql foreign key](https://dev.mysql.com/doc/mysql-tutorial-excerpt/5.7/en/example-foreign-keys.html)     

- [example using inquirer with mysql](https://github.com/mcintyrehh/bamazon) 
- [tips on using inquirer with mysql](http://5.9.10.113/66626936/inquirer-js-populate-list-choices-from-sql-database) 

    ```.then(function ({ first_name, last_name, manager }) {
            connection.query("INSERT INTO employee (first_name, last_name, manager) 
                 VALUES ?", ('first_name', 'last_name', 'manager'), function (err, result) {
                if (err) throw err;
    })
     ```     

  ## Contribute
  Please feel free to fork this project and create your own branch. Any suggestions for improvement are welcomed.

 ## License
 This project is licensed under the MIT License

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
  
  ## Questions
  Contact me if you have any questions about this project:

  - [Send me an email](mailto:larafoster.dev@gmail.com)

  You can find my projects on Github:
  - [Find me on Github](https://github.com/larafoster)