#language: zh-TW
功能: 註冊
    提供使用者註冊

    背景:
        假設 開啟瀏覽器，打開 "http://localhost:8080" 頁面

    場景: 假設所填入的註冊資料皆正確，應該可以成功進行註冊        
        假設 Name 欄位填入 "John"
        並且 Email 欄位填入 "john@skilltree.com"
        並且 Phone 欄位填入 "0912345678"
        當 按下送出按鈕
        那麼 應該成功送出

    場景: 沒有填入任何資料，註冊應該失敗            
        當 按下送出按鈕
        那麼 應該送出失敗     

    場景: 沒有填入 Name 欄位，註冊應該失敗  
        假設 Email 欄位填入 "john@skilltree.com"
        並且 Phone 欄位填入 "0912345678"          
        當 按下送出按鈕
        那麼 應該送出失敗

    場景: Email 格式不正確，註冊應該失敗  
        假設 Name 欄位填入 "John"
        並且 Email 欄位填入 "abcdefg"
        並且 Phone 欄位填入 "0912345678"          
        當 按下送出按鈕
        那麼 應該送出失敗  

    場景: Phone 長度太長，註冊應該失敗  
        假設 Name 欄位填入 "John"
        並且 Email 欄位填入 "john@skilltree.com"
        並且 Phone 欄位填入 "091234567899999"          
        當 按下送出按鈕
        那麼 應該送出失敗                          