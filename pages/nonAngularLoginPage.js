var basePage = require('../pages/basePage.js');

var LoginPage = function() {
    this.url = 'angular/';
    this.pageLoaded = $('div#page');
    this.userInput = element(by.name('user'));
    this.passInput = element(by.name('pass'));
    this.loginButton = $('.login');
    this.errorMessage = $('#errorMessage');

    this.loginAs = function(userObj) {
        this.login(userObj.username, userObj.password);
    };

    this.login = function(user, pass) {
        this.userInput.sendKeys(user);
        this.passInput.sendKeys(pass);
        this.loginButton.click();
    };
};
LoginPage.prototype = basePage; // extend basePage...
module.exports = new LoginPage();