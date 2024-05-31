1.送貨資料 的送貨方式 要選擇才會記住"送貨方式"的資料 要設定預設為"宅配"  
還有發票類型 沒有選擇輸入框要隱藏(目前是會跑出來)

**訂單建立成功用toast 不要用目前預設的
**沒登入時購物車 不要有東西

送出訂單後 購物車資料要刪除
   
購物車悾悾的 快去逛逛吧 首頁連

資料庫的 order_detail 新增order_id  
order_history刪到只要15行

ALTER TABLE order_detail
ADD COLUMN order_id INT;
order_id給值 10001 到 10015

建立關連
ALTER TABLE order_detail
ADD CONSTRAINT fk_order_history
FOREIGN KEY (order_id) REFERENCES order_history(order_id);

order_history的order_detail_id  刪除

CREATE TABLE order_history (
  order_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  name VARCHAR(255),
  phone VARCHAR(20),
  order_date DATETIME,
  order_remark TEXT,
  delivery_method VARCHAR(50),
  payment_method VARCHAR(50),
  recipient_address_detail TEXT,
  status VARCHAR(50),
  Invoice_no VARCHAR(50)
);

CREATE TABLE order_detail (
  order_detail_id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  product_id INT,
  amount INT,
  unit_price INT,
  totail_price INT,
  FOREIGN KEY (order_id) REFERENCES order_history(order_id)
);
