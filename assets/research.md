## Research

### using async with promise
https://codeburst.io/node-js-mysql-and-async-await-6fb25b01b628
https://zellwk.com/blog/converting-callbacks-to-promises/

### database schema
https://github.com/datacharmer/test_db


### using inquirer with mysql
https://github.com/mcintyrehh/bamazon
http://5.9.10.113/66626936/inquirer-js-populate-list-choices-from-sql-database
).then(function ({ first_name, last_name, manager }) {
            connection.query("INSERT INTO employee (first_name, last_name, manager) 
                 VALUES ?", ('first_name', 'last_name', 'manager'), function (err, result) {
                if (err) throw err;
})

### mysql foreign key
https://dev.mysql.com/doc/mysql-tutorial-excerpt/5.7/en/example-foreign-keys.html
https://www.mysqltutorial.org/mysql-foreign-key/

CREATE TABLE categories(
    categoryId INT AUTO_INCREMENT PRIMARY KEY,
    categoryName VARCHAR(100) NOT NULL
) ENGINE=INNODB;

CREATE TABLE products(
    productId INT AUTO_INCREMENT PRIMARY KEY,
    productName varchar(100) not null,
    categoryId INT,
    CONSTRAINT fk_category
    FOREIGN KEY (categoryId) 
        REFERENCES categories(categoryId)
) ENGINE=INNODB;

https://www.sqlshack.com/difference-between-unique-indexes-and-unique-constraints-in-sql-server/

### join tables
https://learnsql.com/blog/how-to-left-join-multiple-tables/
https://learnsql.com/blog/sql-joins-made-easy/

### promise based queries
https://stackoverflow.com/questions/36547292/use-promise-to-process-mysql-return-value-in-node-js