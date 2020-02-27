 // spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('https://testing.stg.coinspectapp.com');
    
    });

    it('should login the app', function()  {
      const uname = $("[name='email']")
      uname.sendKeys("barbtest")
      const pword = $("[name='password']")
      pword.sendKeys("Password1!!")
      $("[type='submit']").click();
      browser.sleep(500);
      expect($(".success").isDisplayed("Results")).toBe(true);
  });
 it('should open the Users', () => {
        const userstab = $(".ico.i-users2")
        userstab.click();
        browser.sleep(500);
        const adduser = $(".i-add.icons")
        adduser.click();
        browser.sleep(500);
        const fname = element(by.model('user.profile.firstName'));
        fname.sendKeys('Automfated');
        browser.sleep(500);
        const lname = element(by.model('user.profile.lastName'));
        lname.sendKeys('Testifng');
        browser.sleep(500);
        const uname = element(by.model('user.username'));
        uname.sendKeys('dummynfatest');
        browser.sleep(500);
        const emaileditbtn = $(".i-edit")
        emaileditbtn.click()
        browser.sleep(500);
        //mao ni ang una
        const toggleuser = element.all(by.css(".i-edit"));
        // toggleuser.get(0).click();
        browser.sleep(500);
        const emailadd = element(by.model('user.email'));
        emailadd.sendKeys("genelfyn12@coinspectapp.com")
        browser.sleep(500);
        toggleuser.get(1).click();
        browser.sleep(500);
        const tmpword = element(by.model('tmpPassword'));
        tmpword.sendKeys('Bossxs22!');
        browser.sleep(500);
        toggleuser.get(2).click();
        browser.sleep(500);
        const retypepword = element(by.model('user.passwordCopy'));
        retypepword.sendKeys('Bossxs22!');
        browser.sleep(500);
        const saveuser = $(".btn-action.action-btns-save");
        saveuser.click();
        browser.sleep(500);
        });
    });