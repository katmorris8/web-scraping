const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="imgBlkFront"]');
  const src = await el.getProperty('src');
  const srcTxt = await src.jsonValue();

  console.log({srcTxt});
  
  browser.close()
}

scrapeProduct('https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523/ref=sr_1_2')