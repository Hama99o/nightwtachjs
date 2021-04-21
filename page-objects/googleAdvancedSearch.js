module.exports = {
  url: 'https://www.google.com/advanced_search',
  elements: {
    mainQueryInputS: 'input[name="as_q"]',
    languageOption: '#lr_button',
    languageOptionS: '.goog-menuitem[value="lang_fr"]',
    lastupdate: '#as_qdr_button',
    lastupdateS: ".goog-menuitem[value='d']",
    region: "#cr_button",
    regionS: ".goog-menuitem[value='countryAF']",
    submit: ".jfk-button[type='submit']"
  },
  commands: [{
    mainQuery(value){
      return this
      .setValue('@mainQueryInputS', value)
    },
    selectFilter(selector, value){
      return this
        .click(selector)
        .click(value)
    },
    lastupdate(selector, value){
      return this
        .click(selector)
        .click(value)
    },
    region(selector, value){
      return this
       .click(selector)
       .click(value)
    },
    submitButton(value){
      return this
        .click(value)
    }

  }]
}
