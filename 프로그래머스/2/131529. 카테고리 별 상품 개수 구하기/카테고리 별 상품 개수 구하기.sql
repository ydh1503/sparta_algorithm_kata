SELECT LEFT(PRODUCT_CODE, 2) CATEGORY, count(*) PRODUCTS
FROM PRODUCT
GROUP BY LEFT(PRODUCT_CODE, 2)