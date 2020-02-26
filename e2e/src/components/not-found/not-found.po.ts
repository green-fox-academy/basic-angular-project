import { browser, by, element } from 'protractor';

export class NotFoundPage {
  navigateTo() {
    return browser.get('/random-invalid-url');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getSubTitleText() {
    return element(by.css('app-root h2')).getText();
  }
}
