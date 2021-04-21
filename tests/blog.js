module.exports = {
  '@tags': ['blog'],
  'google advance test'(browser){
    const mainQuery ="Hama"
    const page = browser.page.googleAdvancedSearch()
    const lag = "lr=lang_fr"
    const country = "cr=countryAF"
    const inputSearch = `.gsfi[name='q'][value='${mainQuery}']`


    page
      .navigate()
      .mainQuery( mainQuery)
      .selectFilter('@languageOption','@languageOptionS')
      .lastupdate('@lastupdate','@lastupdateS')
      .region('@region','@regionS')
      .submitButton('@submit')

    browser
      .assert.urlContains('as_q=Hama', "Params: searching for Hama")
      .assert.urlContains(lag,"Params: language is french")
      .assert.urlContains(country, "Params: country is Afghanistan")
      .assert.visible(inputSearch, 'UI: Hama is in query input')
      .saveScreenshot('tests_output/google.png')
  },
}
