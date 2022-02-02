module.exports = {
  'Registration test' : function (browser) {
    browser
      .url('http://127.0.0.1:8000/register')
	  .waitForElementVisible('body', 5000)
	  .setValue('input[name="first_name"]','example1')
	  .setValue('input[name="last_name"]', 'example11')
	  .setValue('input[name="college_name"]', 'example1')
	  .setValue('input[name="university_year"]', '2')
	  .setValue('input[name="study_grade"]', 'example1')
	  .setValue('input[name="specialization"]', 'example1')
	  .setValue('input[name="github_link"]', 'http://example1.com')
	  .setValue('input[name="bio"]', 'example1')
	  .setValue('input[name="other_contact"]', 'example1')
	  .setValue('input[name="email"]', "tst@tst.com" )
	  .setValue('input[name="password"]', 'tst@tst.com')
	  .setValue('input[name="password_confirmation"]', 'tst@tst.com')
	  .click('button[type="submit"]')
	  .assert.containsText('body', 'The email has already been taken.')
     .end ();
	 browser.pause(1000);
  }
}