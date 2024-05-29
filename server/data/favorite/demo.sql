-- uid為使用者id變數，會員登入後可以得到，需要代入查詢
SET @user_id = 10001;
--

-- 第 1 項查詢: 列出(SELECT) 商品列表用
-- TEST
-- 從 pet_info 表中選取所有寵物資訊，並且嘗試將這些資料與 favorite 表中的收藏資訊進行左聯接
-- 注意這裡要使用LEFT JOIN，因為並非所有商品都會被加到我的最愛中，所以會有空值(NULL)的情況，在查詢後會看到像下面的資料，裡面有用到NULL值
SELECT p.*,
    favorite_id AS favorite_id
FROM pet_info AS p
    LEFT JOIN favorite AS f ON f.pet_id = p.pet_id
    AND f.user_id = @uid
ORDER BY p.pet_id ASC;
--
-- TEST
-- 從 pet_info 表中選取所有產品資訊，並且嘗試將這些資料與 favorite 表中的收藏資訊進行左聯接
SELECT p.*, IF(f.favorite_id, 'true', 'false') AS is_favorite
    FROM pet_info AS p
    LEFT JOIN favorite AS f ON f.favorite_id = p.pet_id
    AND f.user_id = @uid
    ORDER BY p.pet_id ASC;
--


-- 第 2 項查詢: 列出(SELECT) 商品列表用(只需該會員的我的最愛商品)
-- 只有會員有加入到我的最愛的商品清單
SELECT p.*
FROM pet_info AS p
    INNER JOIN favorite AS f ON f.pet_id = p.pet_id
    AND f.user_id = @uid
ORDER BY p.pet_id ASC;
--


-- 第 3 項查詢: 新增(INSERT): 會員把某商品加入我的最愛
-- uid為使用者id變數，會員登入後可以得到，需要代入查詢
-- 兩個 uid(使用者 id)與 pid(商品 id)如果都是已知的情況，直接加入到favorite資料表就可以了
SET @user_id = 10001;
SET @pet_id = 10005;
-- 
INSERT INTO favorite (user_id, pet_id)
VALUES (@user_id, @pet_id)


-- 
-- 第 4 項查詢: 刪除(DELETE): 使用者把某商品移出我的最愛
-- uid為使用者id變數，會員登入後可以得到，需要代入查詢
SET @user_id = 10001;
SET @pet_id = 10005;
DELETE FROM favorite
WHERE pet_id=@pet_id AND user_id=@user_id;


--
-- uid為使用者id變數，會員登入後可以得到，需要代入查詢
-- 找出這個使用者收藏的寵物
-- user_id ---> pet_id  => user_id 去找 pet_id
SET @user_id = 10001;
SELECT f.pet_id
FROM favorite AS f
    WHERE f.user_id = @user_id
ORDER BY f.pet_id ASC;