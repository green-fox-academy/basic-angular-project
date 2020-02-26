import { NotFoundPage } from './not-found.po';

describe('Routing', () => {
  let page: NotFoundPage;

  beforeEach(() => {
    page = new NotFoundPage();
  });

  it('should fallback to 404 page', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('404');
    expect(page.getSubTitleText()).toEqual('Not Found');
  });
});
