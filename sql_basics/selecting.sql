
-- From the students table:
-- Select the first 10 students whose ages are between 35 and 45.
-- Select the third set of 10 students whose ages are more than 25 and whose first names contain `le`. The students must be ordered by their id in ascending order then first name in a descending order.
-- Select the 10 oldest students (You should ignore students with an age that is `NULL`).
-- Select all students with age 45 whose last names contain the letter n.

-- From the products table:
-- Select all the products that are on sale.
-- Select all the products that are on sale and have remaining items in stock ordered by the sale price in ascending order.
-- Select all the products priced between 25 and 50 (regular price) and that are on sale.

-- SELECT id, first_name, last_name, age FROM students WHERE age BETWEEN 35 AND 45 ORDER BY age;
-- SELECT id, first_name, last_name FROM students WHERE age>25 AND first_name ILIKE '%le%' ORDER BY id ASC, first_name DESC LIMIT 10 OFFSET 30;
-- SELECT id, first_name, last_name, age FROM students WHERE age IS NOT NULL ORDER BY age DESC LIMIT 10;
-- SELECT id, first_name, last_name, age FROM students WHERE age=45 AND last_name ILIKE '%n%';

-- SELECT id, name, price, sale_price FROM products WHERE price > sale_price;
-- SELECT id, name, price, sale_price, remaining_quantity FROM products WHERE price > sale_price AND remaining_quantity >0 ORDER BY sale_price ASC;
-- SELECT id, name, price, sale_price FROM products WHERE price BETWEEN 25 AND 50 AND price > sale_price ORDER BY price;

