const {Builder, By, Key, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

let driver;

test.describe("App test cases", function() {

  test.before(function *() {
     driver = new Builder().forBrowser('chrome').build();
   });

   test.it("Open the site", function(done) {
     this.timeout(20000);
     driver.get('https://www.w3schools.com/').then((res) => {
       done();
     })
   })

  test.it("click the nav tutorials button", function(done){
    this.timeout(20000);
    driver.wait(until.elementLocated(By.id('navbtn_tutorials')), 20 * 1000).then(el => {
      driver.findElement(By.id('navbtn_tutorials')).click().then(() => {
        done();
      });
    });
  });

  test.after(() => {
    driver.quit()
  });
})
