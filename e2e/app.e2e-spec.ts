import { InventoryAppPage } from './app.po';

describe('inventory-app App', () => {
  let page: InventoryAppPage;

  beforeEach(() => {
    page = new InventoryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
