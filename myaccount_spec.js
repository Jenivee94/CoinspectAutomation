describe('My Account tab testing', function(){
it('should work as expected', function(){
browser.waitForAngularEnabled(false);
browser.get('https://testing.stg.coinspectapp.com/');
});


    it('should logged in', function() {
        var username = $('[name="email"]');
        username.sendKeys('ojt_admin');
        browser.sleep(500);

        var password = $('[name="password"]');
        password.sendKeys('Password1!');
        browser.sleep(500);
    

        var loginbtn = $('[type="submit"]');
        loginbtn.click();
        browser.sleep(800);
    });

    it('should open the my account tab',function(){
        var account = element(by.css('.ico.i-myaccount'));
        account.click();
        browser.sleep(800);
    });


    it('Should not show retype email when email format is incorrect', function(){
        var loginBtn = element(by.css('[ng-click="view = \'email\'"]'));
        loginBtn.click();
        browser.sleep(500);

        var newEmail = element(by.model('changeEmailForm.email'));
        newEmail.sendKeys('emailtest');
        browser.sleep(500);

        var changeEmailBtn = element(by.css('.btn-action.disabled'));
        changeEmailBtn.click();
        browser.sleep(500);

    });

    it('Should not show type current passsword when emails do not match', function(){
        var loginBtn = element(by.css('[ng-click="view = \'email\'"]'));
        loginBtn.click();
        browser.sleep(500);

        var newEmail = element(by.model('changeEmailForm.email'));
        newEmail.clear();
        newEmail.sendKeys('ojt_admin@coinspectapp.com');
        browser.sleep(500);

        var retypeNewEmail = element(by.model('changeEmailForm.retype'));
        retypeNewEmail.sendKeys('ojt_admin1@coinspectapp.com');
        browser.sleep(500);

        var changeEmailBtn = element(by.css('.btn-action.disabled'));
        changeEmailBtn.click();
        browser.sleep(500);

    });

    it('Should show validation error when password mistyped for email', function(){
        var loginBtn = element(by.css('[ng-click="view = \'email\'"]'));
        loginBtn.click();
        browser.sleep(500);

        var newEmail = element(by.model('changeEmailForm.email'));
        newEmail.clear();
        newEmail.sendKeys('ojt_admin@coinspectapp.com');
        browser.sleep(500);

        var retypeNewEmail = element(by.model('changeEmailForm.retype'));
        retypeNewEmail.clear();
        retypeNewEmail.sendKeys('ojt_admin@coinspectapp.com');
        browser.sleep(500);

        var typeCurrentPass = element(by.model('changeEmailForm.password'));
        typeCurrentPass.sendKeys('Password1!3246');
        browser.sleep(500);

        var changeEmailBtn = element(by.css('.btn-action'));
        changeEmailBtn.click();
        browser.sleep(500);

    });

    it('should be able to change the email', function(){
        var loginBtn = element(by.css('[ng-click="view = \'email\'"]'));
        loginBtn.click();
        browser.sleep(500);

        var newEmail = element(by.model('changeEmailForm.email'));
        newEmail.clear();
        newEmail.sendKeys('ojt_admin@coinspectapp.com');
        browser.sleep(500);

        var retypeNewEmail = element(by.model('changeEmailForm.retype'));
        retypeNewEmail.clear();
        retypeNewEmail.sendKeys('ojt_admin@coinspectapp.com');
        browser.sleep(500);

        var typeCurrentPass = element(by.model('changeEmailForm.password'));
        typeCurrentPass.clear();
        typeCurrentPass.sendKeys('Password1!');
        browser.sleep(500);

        var changeEmailBtn = element(by.css('.btn-action'));
        changeEmailBtn.click();
        browser.sleep(500);

    });

    it('Should not show type current password when usernames do not match ',function(){
        
        var usernameBtn = element(by.css('[ng-click="view = \'username\'"]'));
        usernameBtn.click();
        browser.sleep(500);

        var newUsername = element(by.model('changeUsernameForm.username'));
        newUsername.sendKeys('kitkat');
        browser.sleep(500);

        var retypeUsername = element(by.model('changeUsernameForm.retype'));
        retypeUsername.sendKeys('katkit');
        browser.sleep(500);

        var changeUsrnmeBtn = element(by.css('.btn-action.disabled'));
        changeUsrnmeBtn.click();
        browser.sleep(5000);
    });

    it('Should show validation error when password mistyped for user name',function(){
        
        var usernameBtn = element(by.css('[ng-click="view = \'username\'"]'));
        usernameBtn.click();
        browser.sleep(500);
        

        var newUsername = element(by.model('changeUsernameForm.username'));
        newUsername.clear();
        newUsername.sendKeys('barbtest');
        browser.sleep(500);

        var retypeUsername = element(by.model('changeUsernameForm.retype'));
        retypeUsername.clear();
        retypeUsername.sendKeys('barbtest');
        browser.sleep(500);

        var userNmePass = element(by.model('changeUsernameForm.password'));
        userNmePass.sendKeys('Password112!!');
        browser.sleep(500);

        var changeUsrnmeBtn = element(by.css('.btn-action'));
        changeUsrnmeBtn.click();
        browser.sleep(5000);
    });


    it('should be able to change the username',function(){
        
        var usernameBtn = element(by.css('[ng-click="view = \'username\'"]'));
        usernameBtn.click();
        browser.sleep(500);

        var newUsername = element(by.model('changeUsernameForm.username'));
        newUsername.clear();
        newUsername.sendKeys('ojt_admin');
        browser.sleep(500);

        var retypeUsername = element(by.model('changeUsernameForm.retype'));
        retypeUsername.clear();
        retypeUsername.sendKeys('ojt_admin');
        browser.sleep(500);

        var userNmePass = element(by.model('changeUsernameForm.password'));
        userNmePass.clear();
        userNmePass.sendKeys('Password1!');
        browser.sleep(500);

        var changeUsrnmeBtn = element(by.css('.btn-action'));
        changeUsrnmeBtn.click();
        browser.sleep(500);
    });

    it('Should not be able to change password using the current password',function(){
        var passwordBtn = element(by.css('[ng-click="view = \'password\'"]'));
        passwordBtn.click();
        browser.sleep(500);

        var currentPassword = element(by.model('changePasswordForm.password'));
        currentPassword.sendKeys('Password1!');
        browser.sleep(500);

        var newPassword = element(by.model('tmpPassword'));
        newPassword.sendKeys('Password1!');
        browser.sleep(500);

        var retypePassword = element(by.model('changePasswordForm.retype'));
        retypePassword.sendKeys('Password1!');
        browser.sleep(500);

        var changePassBtn = element(by.css('.btn-action'));
        changePassBtn.click();
        browser.sleep(5000);

    });

    it('Should show validation error when passwords do not match',function(){
        var passwordBtn = element(by.css('[ng-click="view = \'password\'"]'));
        passwordBtn.click();
        browser.sleep(500);

        var currentPassword = element(by.model('changePasswordForm.password'));
        currentPassword.clear();
        currentPassword.sendKeys('Password1!');
        browser.sleep(500);

        var newPassword = element(by.model('tmpPassword'));
        newPassword.clear();
        newPassword.sendKeys('Password1!');
        browser.sleep(500);

        var retypePassword = element(by.model('changePasswordForm.retype'));
        retypePassword.clear();
        retypePassword.sendKeys('Password1!!');
        browser.sleep(500);

        var changePassBtn = element(by.css('.btn-action'));
        changePassBtn.click();
        browser.sleep(5000);

    });

    it('should be able to change password',function(){
        var passwordBtn = element(by.css('[ng-click="view = \'password\'"]'));
        passwordBtn.click();
        browser.sleep(500);

        var currentPassword = element(by.model('changePasswordForm.password'));
        currentPassword.clear();
        currentPassword.sendKeys('Password1!');
        browser.sleep(500);

        var newPassword = element(by.model('tmpPassword'));
        newPassword.clear();
        newPassword.sendKeys('Password1!');
        browser.sleep(500);

        var retypePassword = element(by.model('changePasswordForm.retype'));
        retypePassword.clear();
        retypePassword.sendKeys('Password1!');
        browser.sleep(500);

        var changePassBtn = element(by.css('.btn-action'));
        changePassBtn.click();
        browser.sleep(5000);

    });
   
});
