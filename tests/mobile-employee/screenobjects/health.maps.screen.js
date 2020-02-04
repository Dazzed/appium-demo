import AppScreen from './app.screen';
import { platform as getPlatform } from '../helpers/api';
import txt from '../helpers/text';

const SELECTORS = {
  SEARCH_CLINIC_IOS: '~searchInput',
  SEARCH_CLINIC_ANDROID: 'Search clinic or location',
  CLINIC_TYPE_LABEL_IOS: '~Clinic type',
  CLINIC_TYPE_LABEL_ANDROID: 'Clinic type',
  MAP_TAB: '~Map Tab',
  MAPS_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout[2]',
  MAPS_IOS: '//XCUIElementTypeOther[@name="Compass My location Google Maps"]',
  CALL_BUTTON_IOS: '~Call',
  CALL_BUTTON_ANDROID: 'Call',
  DIRECTION_BUTTON_IOS: '~Directions',
  DIRECTION_BUTTON_ANDROID: 'Directions',
  NEAR_ME_IOS: '~Rejected Near me',
  NEAR_ME_ANDROID: 'Near me',
  DEFAULT_CLINIC_IOS:
    '(//XCUIElementTypeOther[@name="Allied Medical Practice Group (Tsuen Wan - Nan Fung Centre) ( - ) "])[2]',
  DEFAULT_CLINIC_ANDROID: '~ASA Physiotherapy Clinic ASA ',
  SHOW_ALL_CLINIC_IOS: '~Rejected Show all clinics',
  SHOW_ALL_CLINIC_ANDROID: 'Show all clinics',
  LIST_TAB_ANDROID: 'List',
  LIST_TAB_IOS: '~List Tab',
  NO_CLINIC_AVAILABLE_IOS: '~No clinics available',
  NO_CLINIC_AVAILABLE_ANDROID: 'No clinics available',
  NUMBER_CLINIC_FOUND_IOS:
    '//XCUIElementTypeStaticText[@name="Number of Clinics Found"]',
  NUMBER_CLINIC_FOUND_ANDROID: '~Number of Clinics Found',
  AREAS_LABEL_IOS: '//XCUIElementTypeStaticText[@name="Areas"]',
  AREAS_LABEL_ANDROID: 'Areas',
  FIRST_AREA_IN_THE_AREA_LIST_IOS:
    '//XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther',
  FIRST_AREA_IN_THE_AREA_LIST_ANDROID:
    '//android.view.ViewGroup[@content-desc="Areas"]/../following-sibling::android.view.ViewGroup',
  FIRST_DISTRICT_IN_THE_LIST_IOS:
    '(//XCUIElementTypeOther[@name="Districts - Hong Kong Island"])[1]/following-sibling::XCUIElementTypeOther',
  FIRST_DISTRICT_IN_THE_LIST_ANDROID:
    '//android.view.ViewGroup[@content-desc="Districts - Hong Kong Island"]/../following-sibling::android.view.ViewGroup'
};

class HealthMapsScreen extends AppScreen {
  constructor() {
    super(SELECTORS.MAP_TAB);
    this.platform = getPlatform().toUpperCase();
  }

  get firstDistrictInList() {
    if (this.platform === 'IOS') {
      return $(SELECTORS.FIRST_DISTRICT_IN_THE_LIST_IOS);
    } else {
      return $(SELECTORS.FIRST_DISTRICT_IN_THE_LIST_ANDROID);
    }
  }

  get firstAreaInList() {
    if (this.platform === 'IOS') {
      return $(SELECTORS.FIRST_AREA_IN_THE_AREA_LIST_IOS);
    } else {
      return $(SELECTORS.FIRST_AREA_IN_THE_AREA_LIST_ANDROID);
    }
  }

  get areasLabel() {
    if (this.platform === 'IOS') {
      return $(SELECTORS.AREAS_LABEL_IOS);
    } else {
      return $(txt(SELECTORS.AREAS_LABEL_ANDROID));
    }
  }

  get numberClinicFound() {
    return $(SELECTORS[`NUMBER_CLINIC_FOUND_${this.platform}`]);
  }

  get noClinicAvailable() {
    if (this.platform === 'IOS') {
      return $(SELECTORS.NO_CLINIC_AVAILABLE_IOS);
    } else {
      return $(txt(SELECTORS.NO_CLINIC_AVAILABLE_ANDROID));
    }
  }

  get listTabButton() {
    if (this.platform === 'IOS') {
      return $(SELECTORS.LIST_TAB_IOS);
    } else {
      return $(txt(SELECTORS.LIST_TAB_ANDROID));
    }
  }

  get showAllClinicButton() {
    if (this.platform === 'IOS') {
      return $(SELECTORS.SHOW_ALL_CLINIC_IOS);
    } else {
      return $(txt(SELECTORS.SHOW_ALL_CLINIC_ANDROID));
    }
  }
  get defaultClinic() {
    return $(SELECTORS[`DEFAULT_CLINIC_${this.platform}`]);
  }

  get nearMeButton() {
    if (this.platform === 'IOS') {
      return $(SELECTORS.NEAR_ME_IOS);
    } else {
      return $(txt(SELECTORS.NEAR_ME_ANDROID));
    }
  }

  get directionsButton() {
    if (this.platform === 'IOS') {
      return $(SELECTORS.DIRECTION_BUTTON_IOS);
    } else {
      return $(txt(SELECTORS.DIRECTION_BUTTON_ANDROID));
    }
  }

  get callButton() {
    if (this.platform === 'IOS') {
      return $(SELECTORS.CALL_BUTTON_IOS);
    } else {
      return $(txt(SELECTORS.CALL_BUTTON_ANDROID));
    }
  }
  get clinicTypeLabel() {
    if (this.platform === 'IOS') {
      return $(SELECTORS.CLINIC_TYPE_LABEL_IOS);
    } else {
      return $(txt(SELECTORS.CLINIC_TYPE_LABEL_ANDROID));
    }
  }

  get searchClinicTextField() {
    if (this.platform === 'IOS') {
      return $(SELECTORS.SEARCH_CLINIC_IOS);
    } else {
      return $(txt(SELECTORS.SEARCH_CLINIC_ANDROID, 'android.widget.EditText'));
    }
  }

  get mapTabButton() {
    return $(SELECTORS.MAP_TAB);
  }

  get maps() {
    return $(SELECTORS[`MAPS_${this.platform}`]);
  }
}
export default new HealthMapsScreen();
