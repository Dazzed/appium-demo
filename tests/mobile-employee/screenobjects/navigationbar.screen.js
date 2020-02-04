import AppScreen from './app.screen';
import { platform as getPlatform } from '../helpers/api';

const SELECTORS = {
  HEALTH_NAVIGATOR: '~Lifestyle, tab, 1 of 4',
  CLAIMS_NAVIGATOR: '~Claims, tab, 2 of 4',
  SHOP_NAVIGATOR: '~Choices, tab, 2 of 4',
  PROFILE_NAVIGATOR_IOS:
    '//XCUIElementTypeButton[contains(@name,", tab, 4 of 4")]',
  PROFILE_NAVIGATOR_ANDROID:
    '//android.widget.Button[contains(@content-desc,", tab, 4 of 4")]',
  ME_BUTTON_TEXT_ANDROID:
    '//android.widget.Button[contains(@content-desc,", tab, 4 of 4")]/android.widget.TextView',
  ME_BUTTON_TEXT_IOS: '//XCUIElementTypeButton[contains(@name,", tab, 4 of 4")]'
};

class NavigationBar extends AppScreen {
  constructor() {
    super(SELECTORS.HEALTH_NAVIGATOR);
    this.platform = getPlatform().toUpperCase();
  }
  healthNavigator() {
    return $(SELECTORS.HEALTH_NAVIGATOR);
  }
  claimsNavigator() {
    return $(SELECTORS.CLAIMS_NAVIGATOR);
  }
  shopNavigator() {
    return $(SELECTORS.SHOP_NAVIGATOR);
  }
  profileNavigator() {
    return $(SELECTORS[`PROFILE_NAVIGATOR_${this.platform}`]);
  }
  meButtonText() {
    return $(SELECTORS[`ME_BUTTON_TEXT_${this.platform}`]);
  }
}
export default new NavigationBar();
