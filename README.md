# Restaurant List


## 環境建置與需求 (prerequisites)

1. [Node.js](https://nodejs.org/en/) (LTS)


## 安裝與執行步驟 (installation and execution)

1. 終端機 下載專案

```
git clone https://github.com/HOChiaChun/URL_Shortener.git
```

2. 終端機開啟專案資料夾

```
輸入 cd URL_Shortener
```

3. 安裝 npm 套件

```
終端機輸入 npm install (package.json 已提供相對應需安裝的套件)
```

4. 下載mongodb

```
放進電腦根目錄資料下，並建立一個預存放data的資料夾,名為mongodb-data
在終端機輸入，./mongod --dbpath /Users/{yourname}/mongodb-data
，即可啟動資料庫。
```

5. 安裝Robo 3T 

```
create 一個 localhost 連結的位址為 localhost:27017
，並按下“Ｃonnect”，此時已啟動資料庫ＧＵＩ介面
```

6. 安裝 nodemon 套件

```
終端機輸入 nodemon app.js 或 npm run dev 
```

7. 開啟程式

即啟動完成，可至 http://localhost:3000 進入首頁



 