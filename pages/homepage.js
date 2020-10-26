
var HomePage = function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var btnCalculate = element(by.id('gobutton'));
    var result = element(by.binding('latest'));

    this.get = function(baseUrl) {
        browser.get(baseUrl);
    };

    this.setFirstNumber = function(number) {
        firstNumber.sendKeys(number);
    };

    this.setSecondNumber = function(number) {
        secondNumber.sendKeys(number);
    };

    this.calculate = function() {
        btnCalculate.click();
    };

    this.getResultText = function() {
       return result.getText();
    };

};

module.exports = new HomePage();