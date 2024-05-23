-- 複選找出狗OR貓
SELECT *
FROM product
WHERE species IN ('狗', '貓');


-- 複選找出零食、飼料、罐頭、保健、用品
SELECT *
FROM product
WHERE type IN ('寵物飼料', '寵物罐頭', '寵物用品', '保健食品', '寵物零食');

--- ---

--關鍵字查詢
SELECT *
FROM product
WHERE name LIKE '%牛%'

--查詢價格介於500-1000
SELECT *
FROM product
WHERE price BETWEEN 500 AND 1000;

--組合查詢
SELECT *
FROM product
WHERE species IN ('狗', '貓')
AND type IN ('寵物飼料', '寵物罐頭', '寵物用品', '保健食品', '寵物零食')
AND name LIKE '%牛%'
AND price BETWEEN 500 AND 1000;

--價格小到大(ASC順向)
SELECT *
FROM product
ORDER BY price ASC;

--價格大到小(DESC逆向)
SELECT *
FROM product
ORDER BY price DESC;

--分頁 目前第page頁，每頁parpage個 (查詢字串qs: page=2&perpage5)
--公式 limit = perpage
--offset範例 範例: page=1 offset=0, page=2 pffset=perpage*1
--公式: offset = (page-1)*perpage
SELECT *
FROM product
WHERE species IN ('狗', '貓')
LIMIT 5 OFFSET 5;

SELECT COUNT(*) AS count
FROM product
WHERE species IN ('狗', '貓');

SELECT *
FROM product
LIMIT 5 OFFSET 5;
ORDER BY price ASC;