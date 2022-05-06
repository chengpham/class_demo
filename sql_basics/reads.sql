--SELECT * FROM students WHERE id=1;

--SELECT id, age FROM students WHERE age <20 OR age IS NULL;

-- SELECT first_name FROM students WHERE first_name LIKE 'Jo%';

-- SELECT first_name FROM students WHERE first_name ILIKE '%nn%' OR last_name ILIKE '%nn%';

--SELECT first_name, age FROM students WHERE age BETWEEN 25 AND 35 ORDER BY age DESC;

-- SELECT id, first_name, registration_date FROM students WHERE registration_date BETWEEN current_date - 1000 and current_date - 900;
-- SELECT id, first_name, registration_date FROM students WHERE registration_date BETWEEN (now() - INTERVAL '1000 days') AND (now() - INTERVAL '900 days');

-- SELECT first_name, last_name, age FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name ASC, age;

-- SELECT first_name, last_name FROM students WHERE first_name ILIKE 'k%' ORDER BY first_name LIMIT 10;
-- SELECT first_name, last_name FROM students WHERE first_name ILIKE 'k%' ORDER BY first_name LIMIT 10 OFFSET 5;

-- SELECT count(*) FROM students;

-- SELECT count(*) FROM students WHERE age > 25;

-- SELECT count(*) AS number_of_students_about_25 FROM students WHERE age > 25;

-- SELECT sum(age) AS total_years_of_students FROM students;

-- SELECT avg(age) AS total_years_of_students FROM students;

-- SELECT round(avg(age)) AS total_years_of_students FROM students;

-- SELECT max(age) FROM students;

-- SELECT count(*) as occurances, first_name FROM students GROUP BY first_name;

-- UPDATE students SET first_name='bananas' WHERE id=1;

-- INSERT INTO students (first_name, last_name) VALUES ('johnny', 'spark');
-- SELECT id FROM students WHERE first_name='johnny';

-- DELETE FROM students WHERE id=502;

-- SELECT id, first_name, last_name FROM students WHERE id>495;




