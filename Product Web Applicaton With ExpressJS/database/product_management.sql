-- =====================================
-- 1 CREATE DATABASE
-- =====================================

CREATE DATABASE IF NOT EXISTS product_management;

USE product_management;


-- =====================================
-- 2 CREATE USERLOGIN TABLE
-- =====================================

CREATE TABLE IF NOT EXISTS USERLOGIN (
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(50) NOT NULL,
    role VARCHAR(20) NOT NULL
);


-- =====================================
-- 3 CREATE PRODUCT TABLE
-- =====================================

CREATE TABLE IF NOT EXISTS PRODUCT (
    pid INT PRIMARY KEY,
    pname VARCHAR(100) NOT NULL,
    qty INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    mfgdate DATE
 
);


-- =====================================
-- 4 CHECK TABLES
-- =====================================

SHOW TABLES;

DESC USERLOGIN;

DESC PRODUCT;