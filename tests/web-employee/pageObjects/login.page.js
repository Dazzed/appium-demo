import Page from './app.page';

const SELECTORS = {
  USER_NAME: "//input[@id='email']",
  PASSWORD: "//input[@id='password']",
  LOGIN_BUTTON: "//button[@id='btn-login']",
  //FORGOT_PWD: "//a[contains(text(),'Forgot Password?')]",
  LOGIN_PAGE_LABEL: "//span[contains(text(),'Lifestyle')]"
};

class LoginPage extends Page {
  open() {
    super.open('login');
    super.waitForPageToLoad(SELECTORS.USER_NAME);
  }

  userNameField() {
    return $(SELECTORS.USER_NAME);
  }

  passwordField() {
    return $(SELECTORS.PASSWORD);
  }

  loginButton() {
    return $(SELECTORS.LOGIN_BUTTON);
  }

  //forgotPasswordLink() {
  //  return $(SELECTORS.FORGOT_PWD);
  //}
  loginPageLabel() {
    return $(SELECTORS.LOGIN_PAGE_LABEL);
  }
}
export default new LoginPage();
