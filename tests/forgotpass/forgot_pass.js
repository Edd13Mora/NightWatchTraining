module.exports = {
  'Login test' : function (browser) {
    browser
      .url('http://127.0.0.1:8000/forgot-password')
	  .waitForElementVisible('body', 5000)
	  .setValue('input[name="email"]', 'fahdabida101@gmail.com')
	  .click('button[type="submit"]')
     .end ();
  }
}