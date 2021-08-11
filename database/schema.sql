DROP DATABASE IF EXISTS employeeManage_db;

CREATE DATABASE employeeManage_db;

USE employeeManage_db;

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

ALTER TABLE
    employee
ADD
    CONSTRAINT role_id FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
ADD
    CONSTRAINT manager_id FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE CASCADE;

ALTER TABLE
    role
ADD
    CONSTRAINT department_id FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE CASCADE;
    