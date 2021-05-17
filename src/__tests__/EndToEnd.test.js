import puppeteer from 'puppeteer';


describe('show/hide an events details', () => {
  jest.setTimeout(30000);
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions'] //ignores default settings that cause timeout errors
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .eventDetails');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .eventDetails');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .eventDetails');
    expect(eventDetails).toBeNull();
  });

})

describe('filter events by city', () => {
  jest.setTimeout(30000);
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions'] //ignores default settings that cause timeout errors
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  afterAll(() => {
    browser.close();
  });
  
  test('filter events by city', async () => {
    await page.type('.city', 'Berlin');
    await page.waitForSelector('.suggestions');
    const input = await page.$('.city-suggestion:nth-child(1)');
    await input.click();
    const events = await page.$('.EventList');
    expect(await events.$$eval('.event', el => el.length)).toBe(1);
  })

});