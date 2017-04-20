import { Lifehatchfarm.ComPage } from './app.po';

describe('lifehatchfarm.com App', () => {
  let page: Lifehatchfarm.ComPage;

  beforeEach(() => {
    page = new Lifehatchfarm.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
