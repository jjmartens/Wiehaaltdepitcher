import { WiehaaltdepitcherPage } from './app.po';

describe('wiehaaltdepitcher App', () => {
  let page: WiehaaltdepitcherPage;

  beforeEach(() => {
    page = new WiehaaltdepitcherPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
