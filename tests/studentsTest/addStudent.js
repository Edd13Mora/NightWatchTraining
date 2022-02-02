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
        .click('#add')
        .setValue('input[id="first_name"]','example1')
	    .setValue('input[id="last_name"]', 'example11')
	    .setValue('input[id="college_name"]', 'example1')
	    .setValue('input[id="university_year"]', '2')
	    .setValue('input[id="study_grade"]', 'example1')
	    .setValue('input[id="specialization"]', 'example1')
	    .setValue('input[id="github_link"]', 'http://example1.com')
	    .setValue('input[id="bio"]', 'example1')
	    .setValue('input[id="other_contact"]', 'example1')
        .setValue('input[id="other_contact"]', 'example1')
        .setValue('input[id="study_grade"]', 'example1')
        .setValue('input[id="email"]', random + "@gmail.com" )
	    .setValue('input[id="password"]', 'fahdabida101@gmail.com')
	    .setValue('input[id="password_confirmation "]', 'fahdabida101@gmail.com')
        .click('#cree')
        .assert.containsText('body', 'L\'étudiant a bien été enregistré en base de données.')
       .end ();
    }
  }