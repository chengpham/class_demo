-- For the products table:
-- Select the product whose stock has the most value (use sale price)
-- Select the most expensive product whose price is between 25 and 50 with remaining quantity
-- Select all products on sale with remaining quantity ordered by their price and then their name
-- Select the second set 20 results based on the previous query
-- Find the average price of all products
-- Find the average sale_price of all products that are on sale
-- Find the average price of all products that are on sale with remaining quantity
-- Update all the products whose name contains `paper` (case insensitive) to have a remaining quantity of 0
-- Update all the products whose name contains `paper` or `steel` to have a remaining quantity of a random number between 5 and 25
-- Select the second set of 10 cheapest products (by `price` or `sale_price`) with remaining quantity
-- Build a query that groups the products by their sale price and show the number of products in that price and the sum of remaining quantity. Label the count `product_count`
-- [stretch] Update the most expensive product to have double its quantity in a single query


-- SELECT name, SUM(sale_price * remaining_quantity) AS total_value FROM products GROUP BY name ORDER BY total_value DESC LIMIT 1;
-- SELECT id, name, price, sale_price, remaining_quantity FROM products WHERE price BETWEEN 25 AND 50 AND remaining_quantity>0 ORDER BY price DESC LIMIT 1;
-- SELECT id, name, price, sale_price, remaining_quantity FROM products WHERE price>sale_price AND remaining_quantity>0 ORDER BY price,name;
-- SELECT id, name, price, sale_price, remaining_quantity FROM products WHERE price>sale_price AND remaining_quantity>0 ORDER BY price,name OFFSET 20 LIMIT 20;
-- SELECT avg(price) FROM products;
-- SELECT avg(sale_price) FROM products WHERE sale_price<price;
-- SELECT avg(sale_price) FROM products WHERE sale_price<price AND remaining_quantity>0;
-- UPDATE products SET remaining_quantity = 0 WHERE name ILIKE '%paper%';
-- SELECT id, name, price, sale_price, remaining_quantity FROM products WHERE name ILIKE '%paper%';
-- UPDATE products SET remaining_quantity = floor(random() * (26-5)+5) WHERE name ILIKE '%paper%' OR name ILIKE '%steel%';
-- SELECT id, name, price, sale_price, remaining_quantity FROM products WHERE name ILIKE '%paper%' OR name ILIKE '%steel%';
-- SELECT id,name,price,sale_price,remaining_quantity FROM products WHERE remaining_quantity>0 ORDER BY sale_price ASC LIMIT 10 OFFSET 10;
-- SELECT COUNT(*) AS product_count, SUM(remaining_quantity) AS sum_of_remaining FROM products GROUP BY sale_price;
-- SELECT id,name,price,sale_price, remaining_quantity FROM products WHERE remaining_quantity>0 ORDER BY price DESC LIMIT 1;
-- UPDATE products SET remaining_quantity = remaining_quantity*2 WHERE price = (SELECT max(price) FROM products);
-- SELECT id,name,price,sale_price, remaining_quantity FROM products WHERE remaining_quantity>0 ORDER BY price DESC LIMIT 1;


