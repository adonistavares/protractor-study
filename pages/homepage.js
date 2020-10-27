
var HomePage = function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var selector = element(by.model('operator'));
    var btnCalculate = element(by.id('gobutton'));
    var result = element(by.binding('latest'));

    this.get = function() {
        browser.get(browser.baseUrl);
    };

    this.setFirstNumber = function(number) {
        firstNumber.sendKeys(number);
    };

    this.setSecondNumber = function(number) {
        secondNumber.sendKeys(number);
    };

    this.selectOperator = function(operatorSymbol) {
        //selector.element(by.css('[value="'+ operatorName + '"]')).click();
        selector.element(by.cssContainingText('option', operatorSymbol)).click();
    };

    this.calculate = function() {
        btnCalculate.click();
    };

    this.getResultText = function() {
       return result.getText();
    };

};

module.exports = new HomePage();