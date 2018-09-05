const webdriver = require('selenium-webdriver');
const {until} = require('selenium-webdriver');
const By = webdriver.By;

let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://www.w3schools.com/');

driver.wait(until.elementLocated(By.id('navbtn_tutorials')), 20 * 1000).then(el => {
    driver.findElement(By.id('navbtn_tutorials')).click();
});
//
// driver.wait(function() {
//     return driver.isElementPresent(By.id('input-box'));
// }, 3000, '\nFailed to load login page.');





// const {Builder, By, Key, until} = require('selenium-webdriver');
//
// (async function example() {
//   let driver = await new Builder().forBrowser('chrome').build();
//   try {
//     await driver.get('http://localhost:3000/');
//     await driver.findElement(By.id('input-box')).click();
//   } finally {
//     await driver.quit();
//   }
// })();
