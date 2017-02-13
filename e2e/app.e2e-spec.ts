import { ValentineTodoPage } from './app.po';

describe('valentine-todo App', function() {
  let page: ValentineTodoPage;

  beforeEach(() => {
    page = new ValentineTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
