import {browser, element, by} from 'protractor';

export class AuthAppPage {

  navigateToLogin() {
    browser.waitForAngularEnabled(false);
    return browser.get('/login');
  }

  getLoginAdvice() {
    return element(by.id('signInAdvice')).getText();
  }

  getTitle() {
    return browser.getTitle();
  }
}
