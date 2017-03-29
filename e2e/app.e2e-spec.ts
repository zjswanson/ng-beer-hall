import { QuisenbeeriesPage } from './app.po';

describe('quisenbeeries App', function() {
  let page: QuisenbeeriesPage;

  beforeEach(() => {
    page = new QuisenbeeriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
