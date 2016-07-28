module.exports = function() {
    this.Given(/^開啟瀏覽器，打開 "([^"]*)" 頁面$/, function(url) {
        this.url(url)
            .waitForElementVisible('body', 1000);
    });

    this.Given(/^Name 欄位填入 "([^"]*)"$/, function(name) {
        this.setValue('input[name=name]', name);
    });

    this.Given(/^Email 欄位填入 "([^"]*)"$/, function(email) {
        this.setValue('input[name=email]', email);
    });

    this.Given(/^Phone 欄位填入 "([^"]*)"$/, function(phone) {
        this.setValue('input[name=phone]', phone);
    });

    this.When(/^按下送出按鈕$/, function() {
        this.click('button[type=submit]');
    });

    this.Then(/^應該成功送出$/, function() {
        this.assert.visible('div.alert-success');
    });

    this.Given(/^應該送出失敗$/, function() {
        this.assert.visible('div.alert-danger');
    });
}