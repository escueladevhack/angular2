import { AngularFireDemoPage } from './app.po';

describe('angular-fire-demo App', function() {
  let page: AngularFireDemoPage;

  beforeEach(() => {
    page = new AngularFireDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
