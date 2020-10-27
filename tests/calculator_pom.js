
var homepage = require('../pages/homepage');

describe('demo calculator test with POM', function(){
    it('addition test', function() {
        homepage.get();

        homepage.setFirstNumber('2');
        homepage.selectOperator('+');
        homepage.setSecondNumber('5');
        homepage.calculate();

        expect(homepage.getResultText()).toEqual('7');

        browser.sleep(2000);
    });

    it('multiplication test', function() {
        homepage.get();

        homepage.setFirstNumber('5');
        homepage.selectOperator('*');
        homepage.setSecondNumber('10');
        homepage.calculate();

        expect(homepage.getResultText()).toEqual('50');

        browser.sleep(2000);
    });
});