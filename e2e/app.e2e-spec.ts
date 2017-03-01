import { MigraOSPage } from './app.po';

describe('migra-os App', () => {
  let page: MigraOSPage;

  beforeEach(() => {
    page = new MigraOSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
