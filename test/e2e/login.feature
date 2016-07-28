#language: zh-TW
功能: 註冊
    提供使用者註冊

    背景:
        假設 開啟瀏覽器，打開 "http://localhost:8080" 頁面

    場景: 假設所填入的註冊資料皆正確，應該可以成功進行註冊        
        假設 Name 欄位填入 "api.test01"
        並且 Password 欄位填入 "1234"
        當 按下送出按鈕
        那麼 應該成功回到首頁網址 "http://localhost:8080"                        