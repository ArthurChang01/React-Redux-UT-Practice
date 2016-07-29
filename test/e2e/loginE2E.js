module.exports = function() {
    this.Given(/^開啟瀏覽器，打開 "([^"]*)" 頁面$/, function(url) {
        this.url(url)
            .waitForElementVisible('body', 10000)
            .click('a[href="/login"]');
    });

    this.Given(/^Name 欄位填入 "([^"]*)"$/, function(name) {
        this.setValue('input[name=username]', name).pause(3000);
    });

    this.Given(/^Password 欄位填入 "([^"]*)"$/, function(password) {
        this.setValue('input[name=password]', password).pause(2000);
    });

    this.When(/^按下送出按鈕$/, function() {
        this.click('input[type=submit]').pause(5000);
    });

    this.Then(/^應該成功回到首頁網址 "([^"]*)"$/, function(url) {
        this.assert.containsText("a[title=Manage]", "Hello ");
    });
}