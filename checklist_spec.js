   // spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('htts://testing.stg.coinspectapp.com');
    
    });

    it('should login the app', function()  {
      const uname = $("[name='email']")
      uname.sendKeys("barbtest")
      const pword = $("[name='password']")
      pword.sendKeys("Password1!")
      $("[type='submit']").click();
      expect($(".success").isDisplayed("Results")).toBe(true);
  });
  it('should selects the checklist' ,function(){
        var checklist = element(by.css(".ico.i-checklists"));
        checklist.click();
        browser.sleep(300);
        var category = element(by.css('.column.small-9'));
        category.click();
        browser.sleep(300);
        var newChecklist = element(by.css('.btn.ug-add'));
        newChecklist.click();
        browser.sleep(300);
        var checklistName = element(by.id('chk_name'));
        checklistName.sendKeys('000000test');
        browser.sleep(300);
        var checklistIcon = element(by.css('.ck-editor-header__image--hovered.ng-binding'));
        checklistIcon.click();
        browser.sleep(300);
        var avatarlist = element(by.css('img.checklist-icon__image.ng-scope'));
        avatarlist.click();
        var selectAvatar = $('button.checklist-icon__button.checklist-icon__button--select.ng-binding');
        selectAvatar.click();
        browser.sleep(300);
        var checklistDescription = $('.ck-details').$('div.mb-3').$('[ng-model="model"]');
        checklistDescription.sendKeys('this is test');
    // browser.sleep(500);
        // var createNewchecklist = $('checklist-editor-controls.ng-isolate-scope').$('.row.ck-ctrl-btns-container')
        // .$('.ui-button.ui-button--primary.checklist-ctrl-btns__create.ng-scope')
        // createNewchecklist.click();
        // browser.sleep(500);
        var createNewchecklist = element(by.css('button.ui-button.ui-button--primary.checklist-ctrl-btns__create.ng-scope'));
        createNewchecklist.click();
        browser.sleep(300);
        var newCategory1 = $('div.ck-editor-button.ng-scope').$('i.checklist-editor-collapsible__icon.checklist-editor__btn-icon.checklist-editor__btn-icon--blue.i-add');
        newCategory1.click();
        browser.sleep(300);
        var inputFields = element.all(by.model('model'));
        inputFields.get(2).sendKeys('Category 1');
        browser.sleep(300);
        var saveCategory = element.all(by.css('.ck-editor__btn-icon.i-edit.edit.unedit'));
        saveCategory.get(0).click();
        browser.sleep(300);
        var toggleClick1 = element.all(by.css('.ck-editor__btn-icon.i-add'));
        toggleClick1.get(0).click();
        browser.sleep(300);
        inputFields.get(2).sendKeys('Question 1');
        //browser.sleep(500);
        // var addQuestionDescription = $('.criteria-list-item__editor.ng-scope').$('section.criteria-editor')
        // .$("textarea[name='question-description']");
        // addQuestionDescription.sendKeys('Test');
        inputFields.get(3).sendKeys('This is test');
        //browser.sleep(500);
        inputFields.get(4).sendKeys('Yes');
        //browser.sleep(500);
        var buttonAddAnswerchoice = element.all(by.css('.answer-choices__add-answer-button.ng-binding'));
        buttonAddAnswerchoice.click();
        browser.sleep(300);
        inputFields.get(6).sendKeys('No');
        browser.sleep(300);
        var buttonAddAnswerchoice = element.all(by.css('.answer-choices__add-answer-button.ng-binding'));
        buttonAddAnswerchoice.click();
        browser.sleep(300);
        inputFields.get(8).sendKeys('Maybe');
        browser.sleep(300);
        var saveQuestion1 = $('.criteria-list-item__editor.ng-scope').$('section.criteria-editor').$('button.ui-button.ui-button--primary.ng-binding.ng-scope')
        saveQuestion1.click();
        browser.sleep(300);
        var newCategory2 = $('div.ck-editor-button.ng-scope').$('i.checklist-editor-collapsible__icon.checklist-editor__btn-icon.checklist-editor__btn-icon--blue.i-add')
        newCategory2.click();
        browser.sleep(300);
        inputFields.get(10).sendKeys('Category 2');
        browser.sleep(300);
        var saveCategory2 = element.all(by.css('.ck-editor__btn-icon.i-edit.edit'));
        saveCategory2.get(0).click();
        browser.sleep(300);
        var toggleClick2 = element.all(by.css('.ck-editor__btn-icon.i-add'));
        toggleClick2.get(1).click();
        browser.sleep(300);
        inputFields.get(11).sendKeys('Question 2');
        browser.sleep(300);
        inputFields.get(11).sendKeys('This is test');
        browser.sleep(300);
        var selectAnswerchoice = element(by.model('ctrl.tempModel'));
        selectAnswerchoice.click();
        browser.sleep(300);
        var selectDropdown = element(by.model('ctrl.tempModel'));
        selectDropdown.$('[value="dropdown"]').click();
        browser.sleep(300);
        //var saveCategory3 = element.all(by.css('.ck-editor__btn-icon.i-edit.edit'));
   // saveCategory3.get(0).click();
   // browser.sleep(2000);
   // var toggleClick3 = element.all(by.css('.ck-editor__btn-icon.i-add'));
   // toggleClick3.get(2).click();
   // browser.sleep(2000);
   // input.get(14).sendKeys('Question 3');
   // browser.sleep(3000);
   // input.get(15).sendKeys('This is test');
   // browser.sleep(2000);
   // var selectText = element(by.model('ctrl.tempModel'));
   // selectText.$('[value="text"]').click();
   // browser.sleep(2000);
   // var clickContinue = element(by.css('.ui-button.ui-button--red.ng-binding'));
   // clickContinue.click();
   // browser.sleep(2000);
   // // var clickContinue = element(by.css("ng-click='ctrl.confirm'()")).click();
   // // $("ng-click='ctrl.confirm'()").click();
   // // browser.sleep(3000);
   // input.get(16).sendKeys('Text Test');
   // browser.sleep(2000);
   // --- Show Advance Option --- //
   var advanceOption = element(by.css('.advanced-opt-btn'));
   advanceOption.click();
   browser.sleep(2000);
   var showAdvanceOptions = element.all(by.css('.ui-accordion-panel.ng-scope.ng-isolate-scope'));
   showAdvanceOptions.get(1).click();
   browser.sleep(2000);
   //Report Photo Tab
   // showAdvanceOptions.get(2).click();
   // browser.sleep(2000);
   //-----Conditional Messages Tab ------ //
   showAdvanceOptions.get(3).click();
   browser.sleep(1000);
   var newConditionalMessage = element.all(by.css('button.ui-button.ui-button--primary.ng-binding.ng-scope'));
   newConditionalMessage.get(1).click();
   browser.sleep(3000);
   var welcomeMessage = element.all(by.model('html'));
   welcomeMessage.get(0).sendKeys('Conditional Message Test');
   browser.sleep(1000);
   var triggerCondition = element(by.model('ctrl.selectedQuestionId'));
   triggerCondition.click();
   browser.sleep(3000);
   var selectTriggerQuestion = element(by.css('label="1.1"'));
   selectTriggerQuestion.click();
   browser.sleep(1000);
   // ---- Welcome Message Tab -----//
   showAdvanceOptions.get(4).click();
   browser.sleep(1000);
   welcomeMessage.get(2).sendKeys('Welcome Message Test');
   browser.sleep(1000);
   var saveWelcomeMessage = element.all(by.css('button.ui-button.ui-button--primary.ng-binding'));
   saveWelcomeMessage.get(2).click();
   browser.sleep(1000);
   // ---- Notification Tab ---- //
   showAdvanceOptions.get(5).click();
   browser.sleep(1000);
   // ---- Report Configuration Tab ---- //
   showAdvanceOptions.get(6).click();
   browser.sleep(1000);

    });
});