module.exports = {
  'My first test case'(browser){
    browser
      .url('https://github.com/Hama99o/')
      .waitForElementVisible('.vcard-fullname')
      .assert.containsText(".vcard-fullname", "Hama")
  }
}
