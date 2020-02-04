import AppPage from './app.page';

const SELECTORS = {
  EMAIL_ID: ".//input[@name='email']",
  PASSWORD: ".//input[@name='password']",
  // EMAIL_ID: '[data-testid="email-input"] > input',
  // PASSWORD: '[data-testid="password-input"] > input',
  LOGIN_BUTTON: ".//button[@type='submit']"
};

class LoginPage extends AppPage {
  open() {
    super.open('login');
    super.waitForPageToLoad(SELECTORS.EMAIL_ID);
  }

  emailField() {
    return $(SELECTORS.EMAIL_ID);
  }

  passwordField() {
    return $(SELECTORS.PASSWORD);
  }

  loginButton() {
    return $(SELECTORS.LOGIN_BUTTON);
  }
}
export default new LoginPage();
