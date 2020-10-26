
describe('demo calculator tests', function(){
    it('addition test', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        let firstNumber = element(by.model('first'));
        let secondNumber = element(by.model('second'));
        // Button using id
        let button = element(by.id('gobutton'));
        // Button using ng-click
        //let button = element(by.css('[ng-click="doAddition()"]'));
        // Button using class
        //let button = element(by.css('.btn'));

        let result = element(by.binding('latest'));

        firstNumber.sendKeys('1');
        secondNumber.sendKeys('2');
        button.click();

        // Assert the result
        expect(result.getText()).toEqual('3');

        browser.sleep(2000);
    });
});