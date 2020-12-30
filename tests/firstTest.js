module.exports = {
    'first test case'(browser) {
        browser
            .url('https://stackoverflow.com/')
            .waitForElementVisible('#for-developers')
            .assert.containsText('#for-developers', 'For developers, by developers')
    }
}