
-- Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.
-- Select product names, product prices and the lowest price they were sold at during the last 20 months.
-- [Note] the total price in the line_items table is price per unit and not total price.

-- SELECT line_items.price, line_items.quantity FROM orders 
-- INNER JOIN line_items ON orders.id = line_items.id 
-- WHERE orders.completed_on BETWEEN '2016-01-01%' AND '2016-01-31%';

-- SELECT line_items.order_id, AVG(line_items.price * line_items.quantity)
-- FROM orders
-- INNER JOIN line_items
-- ON orders.id = line_items.order_id
-- WHERE orders.completed_on => '2016-01-01' AND orders.completed_on <= '2016-01-31'
-- GROUP BY line_items.order_id
-- ORDER BY line_items.order_id;

SELECT products.id, products.name, products.price, MIN(line_items.price)
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN  orders ON orders.id = line_items.order_id
WHERE orders.completed_on BETWEEN '2016-01-01' AND '2018-01-31'
GROUP BY products.id;