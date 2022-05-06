CREATE TABLE cars (
    id SERIAL,
    make VARCHAR(50),
    mode VARCHAR(50),
    doors INTEGER,
    description TEXT
);

ALTER TABLE cars RENAME COLUMN mode TO model;
-- sudo -u postgres psql -d database_name < ./path/to/sql/file
INSERT INTO cars (make, model, doors, description) VALUES ('Mazda', '3', 4, 'zoom zoom');
INSERT INTO cars (make, model, doors, description) VALUES ('Tesla', 'Model 3', 4, 'electricity');

SELECT * FROM students;