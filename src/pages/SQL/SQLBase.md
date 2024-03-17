# SQLBase

## create database

建立資料的時候 使用反引號避免與關鍵字衝突
`` create database `database`; ``

## drop database ( remove )

`` drop database `database`  ``

## 選擇要使用的資料庫

`` use `database`  ``

## 資料型態

- int 整數
- decimal (m,n) 浮點數 m = 有幾位數, n = 小數點有幾個
- varchat 字串
- blob ( Binary Large Object ) 圖片 影片 檔案...
- date 'YYYY-MM-DD' 日期
- timestamp 'YYYY-MM-DD' 紀錄時間

## Primary key: 主 key 唯一值 ( 不可重複的資料 )

當目前的 primary key 無法作為資料的唯一值的情況下會設定多筆 primary key

## Foreign key: 外 key ( 可以連結到其他 table 的對應 key )

## 建立 table

```sql
CREATE TABLE `test`(
    `test_id`       int primary key,
    `name`          varchar(20),
    `age`           int,
    `Birth`         date,
    `createTime`    timestamp,
    -- primary key(`test_id`) 等同於 `test_id` int primary key,
);
```

## 移除 table

```sql
drop table `test`
```

## alter table ( 新增,移除表格屬性 )

```sql
-- add
alter table `test` add newProp decimal(3,2)

-- remove
alter table `test` drop newProp decimal(3,2)
```

## 添加 table 中的資料

- 需要注意資料建立的順序

```sql
insert into `test` values (1,'9527',18,'1995-04-16',null);
insert into `test` values (2,'9528',20,'1995-06-26',null);
```

## 搜尋 table 中的資料

```sql
select * from `test`
```
