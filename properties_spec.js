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
  it('should selects the properties' ,function(){
    var properties = $("#sub-body").$(".navigator-overflow").$(".ico.i-properties");
    properties.click();
    browser.sleep(500);
 var propertiesCategory = $('.ug-list.category.created.ng-scope').$('.column.small-9')
    propertiesCategory.click();
    browser.sleep(500);
    var newProperties = $('div.ng-scope').$('.column.small-8.users-btn').$('.btn.ug-add')
    newProperties.click();
    browser.sleep(300);
    //     // dont delete
    //     // var propertyuploadPhoto = $('div.ng-scope').$('.small-2')
    //     // propertyuploadPhoto.click();
    //     // browser.sleep(3000);
    //     // var searchClick = $('div.ng-scope').$('.column.large-12').$('.small-10.columns')
    //     // searchClick.click();
    //     // browser.sleep(3000);
    //     // var searchAddress = $('div.ng-scope').$('.row.search-row')
    //     // searchAddress.click();
    //     // browser.sleep(3000);
    //     // var inputAddress = $('div.ng-scope').$('.small-10.columns').$('.search-input.inputFilter.ng-pristine.ng-valid.ng-touched')
    //     // inputAddress.sendKeys('cal');
    //     // browser.sleep(3000);
    //     // dont delete
        var propertyName = $('div.ng-scope').$('.column.large-12').$('.column.medium-6').$('input[type="text"]')
        propertyName.sendKeys('PropertyName');
        browser.sleep(300);
        var propertyAddress = element(by.model('building.address'))
        propertyAddress.sendKeys('PropertyAddress');
        //browser.sleep(3000);
        var propertyLine = element(by.model('building.address2'))
        propertyLine .sendKeys('PropertyAddressLine');
        //browser.sleep(3000);
        var propertyLatitude = element(by.model('building.latitude'))
        propertyLatitude.clear();
        propertyLatitude.sendKeys('10000.000');
       //browser.sleep(3000);
        var propertyLongitude = element(by.model('building.longitude'))
        propertyLongitude.clear();
        propertyLongitude.sendKeys('20000.000');
        //browser.sleep(3000);
        var propertyCity = element(by.model('building.city'))
        propertyCity.clear();
        propertyCity.sendKeys('Property City');
        //browser.sleep(3000);
        var propertyState = element(by.model('building.state'))
        propertyState.clear();
        propertyState.sendKeys('Property State');
        //browser.sleep(3000);
        var propertyZip = element(by.model('building.zip'))
        propertyZip.clear();
        propertyZip.sendKeys('6000');
        browser.sleep(3000);
        var propertyCountry = element(by.model('building.country'))
        propertyCountry.clear();
        propertyCountry.sendKeys('Property Country');
        browser.sleep(3000);
       var saveProperty = $('div.ng-scope').$('div.column.small-10')
       saveProperty.click();
       browser.sleep(5000);
    });
 
  });