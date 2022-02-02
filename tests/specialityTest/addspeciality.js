module.exports = {
    'Login test' : function (browser) {
      browser
        .url('http://127.0.0.1:8000/login')
	    .waitForElementVisible('body', 5000)
	    .setValue('input[name="email"]', 'tst@tst.com')
	    .setValue('input[name="password"]', 'tst@tst.com')
	    .click('button[type="submit"]')
        .url('http://127.0.0.1:8000/dashboard/classes')
        .click('.presentation_card')
        .waitForElementVisible('.presentation_card', 5000)
        .setValue('input[id="title"]', 'waw')
        .click('button[name="ajouter"]')
        .assert.containsText('body', 'La spécialité a bien été enregistrée.')
       .end ();
    }
  }