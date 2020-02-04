import {
  isNavigationBarVisible,
  navigateToProfileScreen,
  textOfMeTab
} from '../actions/navigator.action';
import LoginScreen from '../screenobjects/login.screen';
import ProfileScreen from '../screenobjects/profile.screen';
import SettingScreen from '../screenobjects/setting.screen';
import nativeAlert from '../helpers/NativeAlert';
import txt from '../helpers/text';

export function loginAs(empDetail) {
  LoginScreen.waitForIsShown(true);
  login(empDetail);
  let meTabText = textOfMeTab();
  meTabText = meTabText.split(',')[0];
  if (meTabText !== 'Me') {
    navigateToProfileScreen();
    ProfileScreen.setting.click();
    SettingScreen.selectLanguage.click();
    SettingScreen.selectEnglish.click();
    ProfileScreen.setting.click();
    SettingScreen.selectLogout.click();
    loginPassword(empDetail);
  }
}

export function login(empDetail) {
  LoginScreen.waitForIsShown(true);
  LoginScreen.companyNameField().click();
  LoginScreen.companyNameField().setValue(empDetail.companyName);
  LoginScreen.emailAddressField().click();
  LoginScreen.emailAddressField().setValue(empDetail.emailAddress);
  $(txt('Welcome to')).click();
  LoginScreen.passwordField().click();
  LoginScreen.passwordField().setValue(empDetail.password);
  $(txt('As provided in registration email')).click();

  LoginScreen.loginButton().click();
}
export function loginPassword(empDetail) {
  LoginScreen.waitForIsShown(true);
  $(txt('Welcome to')).click();
  LoginScreen.passwordField().click();
  LoginScreen.passwordField().setValue(empDetail.password);
  $(txt('As provided in registration email')).click();

  LoginScreen.loginButton().click();
}

export function isLoggedin() {
  return isNavigationBarVisible();
}

export function isLoginErrorMessageVisible() {
  let isVisible;
  const platform = driver.capabilities.platformName;
  try {
    nativeAlert.waitForAlertToVisible[platform]();
    const errorMessage = nativeAlert.text[platform]();
    isVisible = errorMessage.includes('Unable to log in') ? true : false;
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}
