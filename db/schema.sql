### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name varchar(255) NOT NULL,
devoured BOOL NOT NULL,
date timestamp
);

DESCRIBE burgers;

INSERT INTO burgers (burger_name) VALUES (?) ;

SELECT * FROM burgers;

--DROP DATABASE burgers;

