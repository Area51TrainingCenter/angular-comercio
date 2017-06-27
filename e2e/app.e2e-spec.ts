import { MyRedditPage } from './app.po';

describe('my-reddit App', () => {
  let page: MyRedditPage;

  beforeEach(() => {
    page = new MyRedditPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
