import AppScreen from './app.screen';
import { platform as getPlatform } from '../helpers/api';

const SELECTORS = {
  LANGUAGE_ANDROID:
    '//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup',
  LANGUAGE_IOS:
    '//XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther',
  ENGLISH_IOS: '(//XCUIElementTypeOther[@name="English (Hong Kong)"])[2]',
  ENGLISH_ANDROID:
    '//android.view.ViewGroup[@content-desc="English (Hong Kong)"]',
  LOGOUT_ANDROID: '~Log out',
  LOGOUT_IOS: '(//XCUIElementTypeOther[@name="Log out"])[2]'
};

class SettingScreen extends AppScreen {
  //  constructor() {
  //   super(SELECTORS.HEALTH_NAVIGATOR);
  //  this.platform = getPlatform().toUpperCase();
  // }

  get selectLanguage() {
    this.platform = getPlatform().toUpperCase();
    return $(SELECTORS[`LANGUAGE_${this.platform}`]);
  }
  get selectEnglish() {
    this.platform = getPlatform().toUpperCase();
    return $(SELECTORS[`ENGLISH_${this.platform}`]);
  }
  get selectLogout() {
    this.platform = getPlatform().toUpperCase();
    if (this.platform == 'IOS') {
      return $(SELECTORS[`LOGOUT_IOS`]);
    } else {
      return $(SELECTORS.LOGOUT_ANDROID);
    }
  }
}
export default new SettingScreen();
