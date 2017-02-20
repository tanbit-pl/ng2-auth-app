import {AuthAppPage} from './app.po';

describe('auth-app run', function () {
  let page: AuthAppPage;

  beforeEach(() => {
    page = new AuthAppPage();
  });

  it('should display advice when on login page', () => {
    //when
    page.navigateToLogin();

    //then
    expect(page.getTitle()).toEqual('AuthApp login');
    expect(page.getLoginAdvice()).toEqual('Please sign in to use all application features');
  });
});
