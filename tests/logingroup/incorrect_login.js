const Str = require('@supercharge/strings')
const random = Str.random()  
module.exports = {
  'Login test' : function (browser) {
    browser
      .url('http://127.0.0.1:8000/login')
	  .waitForElementVisible('body', 5000)
	  .setValue('input[name="email"]', random + "@gmail.com")
	  .setValue('input[name="password"]', 'fdhfdhtheh')
	  .click('button[type="submit"]')
	  .assert.containsText('body', 'Les information de connexion sont incorrectes.')
     .end ();
  }
}