// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('https://testing.stg.coinspectapp.com');
    
    });

    it('should login the app', function()  {
      const uname = $("[name='email']")
      uname.sendKeys("barbtest")
      const pword = $("[name='password']")
      pword.sendKeys("Password1!")
      $("[type='submit']").click();
      expect($(".success").isDisplayed("Results")).toBe(true);
  });

    it('should open the usergroup', function()  {
        const usergroup = $(".ico.i-usergroups")
        usergroup.click();
        browser.sleep(1000);
        const ugroup = $(".column.small-11")
        ugroup.click()
        //add usergroup name
        const ugname = element(by.model('group.name'));
        ugname.sendKeys('Automated usergroup');
        //Select searched user
        const chkgroup = element(by.css('.column.medium-4'));
        chkgroup.click();
        const ugroupuser = element(by.model('inputLabel.labelFilter'));
        ugroupuser.sendKeys('automated');
        //add selected user
        browser.sleep(3000);
        const ugroupselectuser = element.all(by.css(".acol"))
        ugroupselectuser.get(3).click();
        browser.sleep(1000);
        //add selected user
        const ugroupadduser = element(by.css(".btn-action.add-members"));
        ugroupadduser.click();
        browser.sleep(1000);
        //user status
        const memstat = element(by.model("member.membership.status"));
        memstat.click();
        browser.sleep(1000);
        expect(memstat.isDisplayed("Active")).toBe(true);
        //edit permission
        browser.sleep(1000);
        const editpermission = $(".icon-btn.i-edit.edit-permission");
        editpermission.click();
        browser.sleep(1000);
        //enable action
        const enaction = element(by.model("action.selected"));
        enaction.click();
        browser.sleep(1000);
        //savebutton for permission
        const savepermission = $(".btn-action.red");
        savepermission.click();
        browser.sleep(1000);
        //to save the usergroup
        const saveusergroup =
        element.all(by.css(".column.medium-2"));
        saveusergroup.get(2).click();
        browser.sleep(1000);
        expect(saveusergroup.isDisplayed("Save"))
    });
});