-- SELECT * FROM students CROSS JOIN projects;
-- SELECT students.id AS std_id, first_name, title project_title 
-- FROM students INNER JOIN projects ON students.id=projects.student_id
-- ORDER BY students.first_name;

-- SELECT students.*, courses.title AS course_title, score
-- FROM students INNER JOIN enrolments ON students.id = enrolments.student_id
-- INNER JOIN courses ON enrolments.course_id = courseS.id
-- WHERE courses.title ILIKE '%hybrid matrix%';
-- SELECT courses.title, students.first_name, enrolments.score 
-- FROM students
-- INNER JOIN enrolments ON students.id = enrolments.student_id
-- INNER JOIN courses ON enrolments.course_id = courses.id
-- WHERE students.first_name ILIKE 'Re%';

-- SELECT students.id, students.first_name, students.last_name, projects.title, projects.id, projects.student_id 
-- FROM students FULL OUTER JOIN projects ON students.id = projects.student_id LIMIT 10;

-- SELECT first_name, last_name, projects.title AS project_title
-- FROM students
-- LEFT JOIN projects ON students.id = projects.student_id
-- WHERE projects.title IS NULL;

-- SELECT courses.title, ROUND(AVG(enrolments.score),2) AS average_score FROM courses 
-- INNER JOIN enrolments ON courses.id = enrolments.course_id
-- GROUP BY courses.title ORDER BY average_score DESC;

-- SELECT courses.id, courses.title, MAX(enrolments.created_at) AS recent FROM courses
-- INNER JOIN enrolments ON courses.id = enrolments.course_id 
-- GROUP BY courses.id ORDER BY recent DESC;

-- SELECT ARRAY_AGG(first_name), age, count(*) AS age_count 
-- FROM students GROUP BY age ORDER BY age_count DESC;

-- SELECT * FROM 
-- (SELECT courses.title, count(*) AS student_count FROM courses 
-- INNER JOIN enrolments ON courses.id = enrolments.course_id 
-- GROUP BY courses.id ORDER BY student_count DESC) 
-- AS student_count WHERE student_count >= 5;

-- SELECT id, first_name, last_name FROM students WHERE id IN (2,3,4,500,1000);

-- ALTER TABLE students ADD CONSTRAINT unique_email UNIQUE(email);

-- CREATE TABLE cars
-- (
--     make VARCHAR(50) CONSTRAINT must_exist NOT NULL,
--     model VARCHAR(50) CONSTRAINT must_exist NOT NULL
-- )
