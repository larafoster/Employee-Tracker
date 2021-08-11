use employeeManage_db;

INSERT INTO
    department (name)
VALUES
    ('Marketing'),
    ('Finance'),
    ('Engineering'),
    ('Operations'),
    ('Human Resources');

INSERT INTO
    role (title, salary, department_id)
VALUES
    ('Market Analyst', 95000, 1),
    ('Sr. Accountant', 125000, 2),
    ('Software Engineer', 165000, 3),
    ('Jr. Developer', 65000, 3),
    ('Designer', 75000, 1),
    ('VP of Operations', 135000, 4),
    ('Project Manager', 95000, 4),
    ('Recruiter', 55000, 5),
    ('Payroll Clerk', 50000, 2),
    ('HR Manager', 85000, 5);

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Michael', 'Scott', 1, NULL),
    ('Stanley', 'Hudson', 2, 1),
    ('Pam', 'Beesly', 3, NULL),
    ('Kevin', 'Malone', 4, 3),
    ('Kelly', 'Kapoor', 5, NULL),
    ('Dwight', 'Shrute', 6, 5),
    ('Jan', 'Levinson', 7, NULL),
    ('Jim', 'Halbert', 8, 7);