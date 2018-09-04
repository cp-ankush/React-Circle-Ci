const webdriver = require('selenium-webdriver');
const By = webdriver.By;

let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://www.google.com');

driver.findElement(By.id('lst-ib'));
