-- 單選: 查詢物種為'狗狗'(查詢字串qs: type="狗狗")
SELECT *
FROM pet_info
WHERE type = '狗狗'
AND state IS NOT NULL AND state != "";

-- 複選: 查詢物種為'狗狗' 或 '貓貓'
-- 複選的話狀態要下兩次
SELECT *
FROM pet_info
WHERE type = '狗狗' AND state IS NOT NULL AND state != "" OR type = '貓貓' AND state IS NOT NULL AND state != "";

-- 單選: 查詢測驗類型為'敏感型'(查詢字串qs: personality_type="敏感型")
SELECT *
FROM pet_info
WHERE personality_type = '敏感型'
AND state IS NOT NULL AND state != "";

-- 複選: 查詢測驗類型為'敏感型' 或 '自信型'
SELECT *
FROM pet_info
WHERE personality_type = '敏感型' AND state IS NOT NULL AND state != "" OR personality_type = '自信型' AND state IS NOT NULL AND state != "";
WHERE type = '狗狗' AND state IS NOT NULL AND state != "" OR type = '貓貓' AND state IS NOT NULL AND state != "";

-- 單選: 查詢姓別為'男生'(查詢字串qs: gender="男生")
SELECT *
FROM pet_info
WHERE gender = '男生'
AND state IS NOT NULL AND state != "";

-- 複選: 查詢姓別為'男生' 或 '女生'
SELECT *
FROM pet_info
WHERE gender = '男生' AND state IS NOT NULL AND state != "" OR gender = '女生' AND state IS NOT NULL AND state != "";

--- ---

-- 查詢名稱中有關鍵字`招財`(查詢字串qs: name_like=招財)
SELECT *
FROM pet_info
WHERE name LIKE '%招財%'
AND state IS NOT NULL AND state != "";

-- 查詢年齡
-- 查詢年齡為幼年 0~1 (查詢字串qs: age_gte= 1 & age_lte= 0)
SELECT *
FROM pet_info
WHERE age BETWEEN 0 AND 1
AND state IS NOT NULL AND state != "";

-- 使用大於等於與小於等於
SELECT *
FROM pet_info
WHERE age >= 4 AND age <= 7
AND state IS NOT NULL AND state != "";

-- 查詢體型
-- 查詢體型為中型 8~20 (查詢字串qs: weight_gte=8 &weight_lte=20)
SELECT *
FROM pet_info
WHERE weight BETWEEN 8 AND 20
AND state IS NOT NULL AND state != "";

-- 使用大於等於與小於等於
SELECT *
FROM pet_info
WHERE weight >= 8 AND weight <= 20
AND state IS NOT NULL AND state != "";

-- WHERE從句整合測試，每個條件間是用AND連接
SELECT *
FROM pet_info
WHERE type IN ('狗狗', '貓貓')
AND name LIKE '%招%'
AND age >= 8
AND weight >= 8 AND weight <= 20
AND state IS NOT NULL AND state != "";

-- 分頁 目前第page頁，每頁perpage個 (查詢字串qs: page=2&perpage=5)
-- 公式: limit = perpage
-- offset 範例:  page=1 offset=0, page=2 offset=perpage*1
-- 公式: offset = (page-1)*perpage
-- LIMIT 表示每頁的記錄數。
-- OFFSET 表示從哪一行開始返回記錄，通常用來跳過前面的幾行記錄。
SELECT *
FROM pet_info
WHERE type IN ('狗狗', '貓貓')
AND state IS NOT NULL AND state != ""
LIMIT 9 OFFSET 27;

-- 需要計算在此條件下，總共有多少結果(為了之後要計算總共有多少頁數)
SELECT COUNT(*) AS count
FROM pet_info
WHERE type IN ('狗狗', '貓貓')
AND state IS NOT NULL AND state != "";