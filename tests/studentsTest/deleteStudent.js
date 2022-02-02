const Str = require('@supercharge/strings')
const random = Str.random() 
module.exports = {
    'Login test' : function (browser) {
      browser
        .url('http://127.0.0.1:8000/login')
	    .waitForElementVisible('body', 5000)
	    .setValue('input[name="email"]', 'tst@tst.com')
	    .setValue('input[name="password"]', 'tst@tst.com')
	    .click('button[type="submit"]')
        .url('http://127.0.0.1:8000/dashboard/students')
        .click('.delete_student')
        .assert.containsText('body', 'L\'étudiant a bien été supprimé.')
       .end ();
    }
  }