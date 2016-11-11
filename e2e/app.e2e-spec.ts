import { Company2Page } from './app.po';

describe('company2 App', function() {
  let page: Company2Page;

  beforeEach(() => {
    page = new Company2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
