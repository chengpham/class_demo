-- 1. Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.
-- 2. Find the average order total price for all the orders in the system
-- [Note] the price in the line_items table is price per unit and not total price.

-- SELECT products.id, products.name, COUNT(line_items.quantity) + products.remaining_quantity AS total 
-- FROM products INNER JOIN line_items ON products.id = line_items.product_id GROUP BY products.id;

-- SELECT products.id, products.name, products.price, AVG(line_items.price), SUM(line_items.quantity), SUM(line_items.quantity * line_items.price)
-- FROM products INNER JOIN line_items ON products.id = line_items.product_id INNER JOIN orders ON line_items.order_id = orders.id 
-- GROUP BY products.id; 

SELECT AVG(total_price) FROM (SELECT SUM(price * quantity) as total_price FROM line_items GROUP BY order_id ) AS average;