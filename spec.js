// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('https://testing.stg.coinspectapp.com');
    
    });

    // at the top of the test spec:
    var fs = require('fs');
 
    // abstract writing screen shot to a file
    function writeScreenShot(data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

    it('should login the app', function()  {
      const uname = $("[name='email']")
      uname.sendKeys("barbtest")
      const pword = $("[name='password']")
      pword.sendKeys("Password1!")
      $("[type='submit']").click();
      expect($(".success").isDisplayed("Results")).toBe(true);
      console.log("Success!")
  });

  it('should check the Dashboard Results', function dashresults() {
    var dashboard2 = $(".ico.i-dashboard2");
    dashboard2.click();
    browser.sleep(500);
    const dashdate = element.all(by.css(".circles-div"))
    dashdate.get(1).click();
    browser.sleep(300);
    dashdate.get(2).click();
    browser.sleep(300);
    dashdate.get(0).click();
    browser.sleep(300);
//check the number label
    const spanchck = element.all(by.css(".number"))
    expect(spanchck.get(5).isDisplayed("7")).toBe(true);
   // console.log(spanchck.get(0).getText());
    expect(spanchck.get(6).isDisplayed("30")).toBe(true);
    expect(spanchck.get(7).isDisplayed("90")).toBe(true);
//check the days label
    const spanchckdays = element.all(by.css(".days"))
    expect(spanchckdays.get(0).isDisplayed("Days")).toBe(true);
    expect(spanchckdays.get(1).isDisplayed("Days")).toBe(true);
    expect(spanchckdays.get(2).isDisplayed("Days")).toBe(true);
//select the startdate and enddate
    const fdate = element(by.model("dates.start"));
    fdate.click();
    browser.sleep(300);
    fdate.clear();
    fdate.sendKeys("01/14/2019");
    const edate = element(by.model("dates.end"));
    edate.click();
    browser.sleep(300);
    edate.clear();
    edate.sendKeys("02/18/2020");
//check the starttime and endtime
//browser.actions().sendKeys(protractor.Key.ENTER).perform();
    const inputtime = element.all(by.model("inputLabel.labelFilter"));
    // const stime = element(by.model("dates.startTime"));
    // stime.click();
    // browser.sleep("500");
    // inputtime.get(0).sendKeys("02:00 AM")
    // const etime = element(by.model("dates.endTime"));
    // etime.click();
    // inputtime.get(1).sendKeys("10:30 PM");
//to select a propert, checklist and user
    const dashprop = element.all(by.css(".toggle-button.ng-binding"));
    dashprop.get(2).click();
    browser.sleep(1000);
    //Property
    expect(dashprop.get(2).isDisplayed("Property")).toBe(true);
    inputtime.get(2).sendKeys("oracle");
    const dashpropselect = element.all(by.css(".acol"));
    dashpropselect.get(10).click();
    browser.sleep(1000);
    dashprop.get(2).click();
    browser.sleep(1000);
    //Checklist
    // const dashchck = $("#dashboard-search-checklist");
    // dashchck.click();
    // expect(dashchck.isDisplayed("Checklist")).toBe(true);
    // inputtime.get(3).sendKeys("abc test - Copy");
    // browser.sleep(1000);
    // dashpropselect.get(3).click();
    // browser.sleep(1000);
    //User
    const dashuser = $("#dashboard-search-user");
    expect(dashuser.isDisplayed("User")).toBe(true);
    dashuser.click();
    inputtime.get(6).sendKeys("testbarb");
    browser.sleep(1000);
    dashpropselect.get(13).click();
    browser.sleep(1000);
    //Update Dashboard
    const dashupdateicon = $(".i-dashboard2.icons");
    const dashupdate = element(by.css(".status-btn.dash-button-update"));
    expect(dashupdate.isDisplayed("Update Dashboard")).toBe(true);
    dashupdateicon.click();
    browser.sleep(1000);
  });

  it('should check the Dashboard table', function dashresults2() {
    //Check Inspection graph
    const dashinsgraph = element(by.css('li[title="Inspection Graph"]'));
    dashinsgraph.click();
    expect(dashinsgraph.isDisplayed("Inspection Graph")).toBe(true);
    browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'dashboard.png');
    });

   //Check Inspection Table
   const dashinstable = element(by.css('li[title="Inspection Table"]'));
    dashinstable.click();
    browser.sleep(1000);
    expect(dashinstable.isDisplayed("Inspection Table")).toBe(true);

    //Check Question table result
    const dashinsquestion = element(by.css('li[title="Question Results Table"]'));
    dashinsquestion.click();
    browser.sleep(1000);
    expect(dashinsquestion.isDisplayed("Question Result Table")).toBe(true);

    //Download CSV
    const dashcsvloadicon = $(".i-download-1.icons");
    const dashcsvload = element(by.css(".status-btn.dash-button-update.dow-btns"));
    expect(dashcsvload.isDisplayed("Download as CSV")).toBe(true);
    dashcsvloadicon.click();
    browser.sleep(5000);

    //Save CSV confirm
 var confcsv = element(by.css('.alert_button')).getText().then(function(text){
        if(text==='Confirm')
            confcsv.click();
       else
           element(by.css('.alert__text.ng-binding')).click();
        });
  });

 
  });