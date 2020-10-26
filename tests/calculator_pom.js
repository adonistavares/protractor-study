
var homepage = require('../pages/homepage');

describe('demo calculator test with POM', function(){
    it('addition test', function() {
        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.setFirstNumber('2');
        homepage.setSecondNumber('5');
        homepage.calculate();

        expect(homepage.getResultText()).toEqual('7');

        browser.sleep(2000);
    });
});