import { GoalsmanagerPage } from './app.po';

describe('goalsmanager App', function() {
  let page: GoalsmanagerPage;

  beforeEach(() => {
    page = new GoalsmanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
