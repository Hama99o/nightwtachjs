module.exports = {
  '@tags': ['blog'],
  'google advance test'(browser){
    const mainQuery ="Hama"
    const mainQueryInputSelector = 'input[name="as_q"]'
    const languageOption = '#lr_button'
    const languageOptionSelecter = '.goog-menuitem[value="lang_fr"]'
    const lastupdate = '#as_qdr_button'
    const lastupdateSelecter = ".goog-menuitem[value='d']"
    const submit = ".jfk-button[type='submit']"
    const region = "#cr_button"
    const regionSelector = ".goog-menuitem[value='countryAF']"
    const lag = "lr=lang_fr"
    const country = "cr=countryAF"
    const inputSearch = `.gsfi[name='q'][value='${mainQuery}']`


    browser
      .url('https://www.google.com/advanced_search')
      .setValue(mainQueryInputSelector, mainQuery)
      .click(languageOption)
      .click(languageOptionSelecter)
      .click(lastupdate)
      .click(lastupdateSelecter)
      .click(region)
      .click(regionSelector)
      // .perform(() => {debugger})
      .click(submit)
      .assert.urlContains('as_q=Hama', "Params: searching for Hama")
      .assert.urlContains(lag,"Params: language is french")
      .assert.urlContains(country, "Params: country is Afghanistan")
      .assert.visible(inputSearch, 'UI: Hama is in query input')
      .saveScreenshot('tests_output/google.png')
  },
}
