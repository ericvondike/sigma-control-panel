import { homePage } from './home.po';
import { getCurrentRouteUrl } from '../../utils/utils';

describe('home Page', () => {
  let page: homePage;

  beforeEach(() => (page = new homePage()));

  it('should display main heading', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ANGULAR NGRX MATERIAL STARTER');
  });

  it('should display "Geting Started" section', () => {
    page.navigateTo();
    page
      .getGettingStarted()
      .isPresent()
      .then((isPresent) => expect(isPresent).toBe(true));
  });

  it('first action button should lead to "Features" route', () => {
    page.navigateTo();
    page
      .getActionButton(0)
      .click()
      .then(() => {
        expect(getCurrentRouteUrl()).toBe('feature-list');
      });
  });
});
