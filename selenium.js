const webdriver = require('selenium-webdriver');
const By = webdriver.By;

let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://localhost:3000/');


driver.findElement(By.id('input-box')).click();
