import { BuiltInDirctivesPage } from './app.po';

describe('built-in-dirctives App', () => {
  let page: BuiltInDirctivesPage;

  beforeEach(() => {
    page = new BuiltInDirctivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
