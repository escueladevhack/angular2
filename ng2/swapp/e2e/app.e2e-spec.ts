import { SwappPage } from './app.po';

describe('swapp App', function() {
  let page: SwappPage;

  beforeEach(() => {
    page = new SwappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
