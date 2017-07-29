import { A4MarketPage } from './app.po';

describe('a4-market App', () => {
  let page: A4MarketPage;

  beforeEach(() => {
    page = new A4MarketPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
