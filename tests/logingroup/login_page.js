module.exports = {
  'Login test' : function (browser) {
    browser
      .url('http://127.0.0.1:8000/login')
	  .waitForElementVisible('body', 5000)
     .end ();
  }
}