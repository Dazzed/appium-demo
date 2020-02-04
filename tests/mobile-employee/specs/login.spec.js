import { loginAs, login, isLoggedin } from '../actions/login.action';
import { validCredentials, invalidCredentials } from '../../data/login.data';

describe('Employee should,', () => {
  fit('be able to login to app with valid credentials', () => {
    loginAs(validCredentials);
    expect(isLoggedin()).toBeTruthy();
  });

  it('not be able to login to application with invalid credentials', () => {
    login(invalidCredentials);
    //expect(isLoginErrorMessageVisible()).toBeTruthy();
  });

  afterEach(() => {
    driver.reset();
  });
});
