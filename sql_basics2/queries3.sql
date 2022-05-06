-- Select all the products that have been purchased in the last 24 months.
-- Select the top 10 products in terms of last year's gross sales.
-- Select all the products that weren't purchased during the last 24 months.
-- [Note] the price in the line_items table is price per unit and not total price.

-- SELECT products.id, products.name, orders.completed_on FROM products 
-- INNER JOIN line_items ON products.id = line_items.product_id 
-- INNER JOIN orders ON line_items.order_id = orders.id
-- WHERE orders.completed_on BETWEEN '2016-03-07%' AND '2018-03-07%';

-- SELECT products.id, products.name, SUM(line_items.price*line_items.quantity) AS total FROM products 
-- INNER JOIN line_items ON products.id = line_items.product_id 
-- INNER JOIN orders ON line_items.order_id = orders.id
-- WHERE orders.completed_on BETWEEN '2017-03-07%' AND '2018-03-07%'
-- GROUP BY products.id ORDER BY total DESC LIMIT 10;

-- SELECT products.id, products.name FROM products 
-- INNER JOIN line_items ON products.id = line_items.product_id 
-- INNER JOIN orders ON line_items.order_id = orders.id
-- ;
-- SELECT name FROM products 
-- INNER JOIN line_items ON products.id=line_items.product_id
-- WHERE line_items.created_at NOT IN (SELECT created_at FROM line_items WHERE created_at BETWEEN '2016-01-01' and '2018-01-01');

SELECT count(line_items.id) FROM products FULL JOIN line_items ON products.id=line_items.product_id
WHERE line_items.product_id IS NULL;