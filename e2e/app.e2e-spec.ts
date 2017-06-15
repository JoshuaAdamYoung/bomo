import { BomoPage } from './app.po';

describe('bomo App', () => {
  let page: BomoPage;

  beforeEach(() => {
    page = new BomoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
