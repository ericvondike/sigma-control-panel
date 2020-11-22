import { AppPage } from './app.po';

import { getCurrentRouteUrl } from '../utils/utils';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => (page = new AppPage()));

  it('should redirect to "home" route', () => {
    page.navigateTo();
    expect(getCurrentRouteUrl()).toEqual('home');
  });

  it('should display current year in the footer', () => {
    page.navigateTo();
    expect(page.getCurrentYear()).toEqual(new Date().getFullYear().toString());
  });

  it('should have "home", "Features", "Examples" menus', () => {
    page.navigateTo();
    page
      .getAllMenus()
      .then((menus) =>
        expect(menus).toEqual(['home', 'Features', 'Examples'])
      );
  });
});
