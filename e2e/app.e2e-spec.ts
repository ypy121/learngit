import { LearngitPage } from './app.po';

describe('learngit App', () => {
  let page: LearngitPage;

  beforeEach(() => {
    page = new LearngitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
