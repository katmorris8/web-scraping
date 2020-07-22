const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="imgBlkFront"]');
  const src = await el.getProperty('src');
  const imageUrl = await src.jsonValue();

  const [el2] = await page.$x('//*[@id="productTitle"]');
  // const txt = await el2.getProperty('textContent');
  const txt = await el2.getProperty('innerHTML');
  const title = await txt.jsonValue();

  const [el3] = await page.$x('//*[@id="price"]');
  const txt2 = await el3.getProperty('innerHTML');
  const price = await txt2.jsonValue();

  console.log({imageUrl, title, price});
  
  browser.close()
}

scrapeProduct('https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523/ref=sr_1_2')