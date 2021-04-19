module.exports = {
  'My first test case'(browser){
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('.articles')
      .assert.containsText(".articles", "Articles")
  }
}
