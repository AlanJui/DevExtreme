import { Ngcli002Page } from './app.po';

describe('ngcli002 App', () => {
  let page: Ngcli002Page;

  beforeEach(() => {
    page = new Ngcli002Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
