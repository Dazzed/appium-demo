import AppScreen from './app.screen';
import txt from '../helpers/text';
import { platform as getPlatform } from '../helpers/api';
import { ios_Version } from '../../data/appVersion';

const SELECTORS = {
  //MyDetails
  MyDetails_IOS: '~My details',
  MyDetails_ANDROID: 'My details',

  //Help
  Help_IOS: '~Help',
  Help_ANDROID: 'Help',

  //Setting
  Settings_IOS: '~Settings',
  Settings_ANDROID: 'Settings',

  //Usefull document
  USEFUL_DOCUMENT_IOS: '~Useful documents',
  WELLNESS_CLAIM_FORM_IOS:
    '~ HSBC HealthPlus – Outpatient Benefit / Wellness Claims Claim Form',
  SHARE_BUTTON_IOS: '~',
  SHARE_BUTTON_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView',
  CANCLE_BUTTON_IOS: '~Cancel',
  ShareWindow_Android:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView',
  bluetooth_Android: 'Bluetooth',
  bluetoothCancle_Android:
    '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[1]',
  HEADER_BACK_IOS: '~header-back',
  MATERNITY_SUBSIDY_CLAIM_FORM_IOS:
    '~ HSBC HealthPlus - Maternity Subsidy Claim Form',
  HOSPITALISATION_SURGICAL_CLAIM_FORM_IOS:
    '~ HSBC HealthPlus - Hospitalisation & Surgical Claim Form',

  //e-Health card
  EHEALTH_CARD_IOS: '~e-Health card',
  SWIPE_FIRST_CARD_IOS:
    '~HSBC Health Plus Name: Tony Stark パトリク Tan Membership No: 09123457 Copayment GP: $50 SP: $20 PHY: $20',

  //My benifit
  MY_BENEFITS_IOS: '~My benefits',
  DROPDOWN_SELECTED_IOS:
    '(//XCUIElementTypeOther[@name="View for, current selection is Catherine Brown Tan"])[4]',
  EMPLOYEES_DEPENDANTS_IOS: 'Tier I - Employee and dependent',

  OUTPATIENTS_IOS: '~Outpatient',
  HOSPITAL_SURGICAL_IOS: '~Hospital and Surgical',
  SUPPLIMENTAL_MAJOR_MEDICAL_IOS: '~Supplemental major medical',
  MATERNITY_SUBSIDY_IOS: '~Maternity subsidy',
  WELLNESS_FLEXIBLE_SPENDING_AMOUNT_IOS: '~Wellness flexible spending amount',
  POLICY_NUMBER_IOS: '~10288801GH',
  INSURER_IOS: '~AXA General Insurance Hong Kong Limited',
  EFFECTIVE_PERIOD_IOS: '~1 Jan 2019 - 31 Dec 2019',

  //Usefull document
  USEFUL_DOCUMENT_ANDROID: 'Useful documents',
  PDF_LOAD_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.RelativeLayout',
  WELLNESS_CLAIM_FORM_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView',
  HEADER_BACK_ANDROID:
    '//android.widget.Button[@content-desc="Go back"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView',
  MATERNITY_SUBSIDY_CLAIM_FORM_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView',
  HOSPITALISATION_SURGICAL_CLAIM_FORM_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView',

  //e-Health card
  QR_IOS:
    '//XCUIElementTypeStaticText[@name="Share card details by showing this QR code to clinic staff."]',
  QR_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView',
  EHEALTH_CARD_ANDROID: 'e-Health card',
  SWIPE_FIRST_CARD_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]',
  //My benifit
  MY_BENEFITS_ANDROID: 'My benefits',
  DROPDOWN_SELECTED_ANDROID: 'View for',
  EMPLOYEES_DEPENDANTS_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView',
  OUTPATIENTS_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView',
  HOSPITAL_SURGICAL_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView',
  SUPPLIMENTAL_MAJOR_MEDICAL_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.widget.TextView',
  MATERNITY_SUBSIDY_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup/android.widget.TextView',
  WELLNESS_FLEXIBLE_SPENDING_AMOUNT_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup/android.widget.TextView',
  POLICY_NUMBER_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[7]/android.widget.TextView[2]',
  INSURER_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[8]/android.widget.TextView[2]',
  EFFECTIVE_PERIOD_ANDROID: '1 Jan 2019 - 31 Dec 2019',

  //Dependent benefit
  SELECT_DEPENDANT_IOS: 'Karen Brown Tan',
  SELECT_DEPENDANT_ANDROID: 'Karen Brown Tan',
  DEPENDANT_EMPLOYEE_IOS:
    '//XCUIElementTypeStaticText[@name="Tier II - Employee and dependent"]',
  DEPENDANT_EMPLOYEE_ANDROID: '',

  //OUTPATIENT Android
  general_medical_practitioner_Android: 'General medical practitioner',
  Specialist_Android: 'Specialist',
  Physiotherapy_Android: 'Physiotherapy',
  Mental_illness_Android: 'Mental illness & emotional disorder',
  Diagnostic_x_ray_Android: 'Diagnostic x-ray, laboratory tests & imaging',
  Medication_purchased_Android: "Medication purchased outside doctor's clinic",

  //Hospital and Surgical-Android
  Room_Board_nursing_Android: 'Room, board & general nursing care',
  Room_Board_nursing_limit_Android: 'Max limit per day',
  Room_Board_nursing_disability_Android: 'Max days per disability²',
  Intensive_care_Android: 'Intensive care',
  Meal_subsidy_Android: 'Meal subsidy',
  Hospital_Service_Android: 'Hospital services',
  Physician_Services_Android: 'Physician services³',
  In_Hospital_Android: 'In-hospital specialist fees',
  Surgeon_fees_Android: 'Surgeon fees',
  Surgeon_fees_Complex_Android: 'Max limit per disability - Complex',
  Surgeon_fees_Major_Android: 'Max limit per disability - Major',
  Surgeon_fees_Inter_Android: 'Max limit per disability - Inter',
  Surgeon_fees_Minor_Android: 'Max limit per disability - Minor',
  Anaesthetist_Android: "Anaesthetist's fees",
  Anaesthetist_Complex_Android: 'Max limit per disability - Complex',
  Anaesthetist_Major_Android: 'Max limit per disability - Major',
  Anaesthetist_Inter_Android: 'Max limit per disability - Inter',
  Anaesthetist_Minor_Android: 'Max limit per disability - Minor',
  Operating_Android: 'Operating theatre charge',
  Operating_Complex_Android: 'Max limit per disability - Complex',
  Operating_major_Android: 'Max limit per disability - Major',
  Operating_Inter_Android: 'Max limit per disability - Inter',
  Operating_Minor_Android: 'Max limit per disability - Minor',
  Annual_Overall_limit_Android: 'Annual overall limit⁴',

  // Supplemental major medical Android
  SUPPLIMENTAL_MAJOR_MEDICAL_MAX_ANDROID: 'Max limit per disability',

  //METERNITY_SUBSIDY ANDROID
  ANTENATAL_CHECKUP_ANDROID: 'Antenatal // post-natal check up',
  LUMP_SUM_BENEFIT_MAX_ANDROID: 'Lump sum benefit max limit per pregnancy',

  // WELLNESS FLEXIBLE ANDROID
  WELLNESS_MAX_LIMIT_ANDROID: 'Karen Brown Tan',

  //OUTPATIENT IOS
  general_medical_practitioner_IOS: '~General medical practitioner',
  Specialist_IOS: '~Specialist',
  Physiotherapy_IOS: '~Physiotherapy',
  Mental_illness_IOS: '~Mental illness & emotional disorder',
  Diagnostic_x_ray_IOS: '~Diagnostic x-ray, laboratory tests & imaging',
  Medication_purchased_IOS: "~Medication purchased outside doctor's clinic",

  //Hospital and Surgical-IOS
  Room_Board_nursing_IOS: '~Room, board & general nursing care',
  Room_Board_nursing_limit_IOS: '~Max limit per day',
  Room_Board_nursing_disability_IOS: '~Max days per disability²',
  Intensive_care_IOS: '~Intensive care',
  Meal_subsidy_IOS: '~Meal subsidy',
  Hospital_Service_IOS: '~Hospital services',
  Physician_Services_IOS: '~Physician services³',
  In_Hospital_IOS: '~In-hospital specialist fees',
  Surgeon_fees_IOS: '~Surgeon fees',
  Surgeon_fees_Complex_IOS: '~Max limit per disability - Complex',
  Surgeon_fees_Major_IOS: '~Max limit per disability - Major',
  Surgeon_fees_Inter_IOS: '~Max limit per disability - Inter',
  Surgeon_fees_Minor_IOS: '~Max limit per disability - Minor',
  Anaesthetist_IOS: "~Anaesthetist's fees",
  Anaesthetist_Complex_IOS: '~Max limit per disability - Complex',
  Anaesthetist_Major_IOS: '~Max limit per disability - Major',
  Anaesthetist_Inter_IOS: '~Max limit per disability - Inter',
  Anaesthetist_Minor_IOS: '~Max limit per disability - Minor',
  Operating_IOS: '~Operating theatre charge',
  Operating_Complex_IOS: '~Max limit per disability - Complex',
  Operating_major_IOS: '~Max limit per disability - Major',
  Operating_Inter_IOS: '~Max limit per disability - Inter',
  Operating_Minor_IOS: '~Max limit per disability - Minor',
  Annual_Overall_limit_IOS: '~Annual overall limit⁴',

  // Supplemental major medical IOS
  SUPPLIMENTAL_MAJOR_MEDICAL_MAX_IOS: '~Max limit per disability',

  //METERNITY_SUBSIDY IOS
  ANTENATAL_CHECKUP_IOS: '~Antenatal / post-natal check up',
  LUMP_SUM_BENEFIT_MAX_IOS: '~Lump sum benefit max limit per pregnancy',

  // WELLNESS FLEXIBLE IOS
  WELLNESS_MAX_LIMIT_IOS: '~Karen Brown Tan',

  //Help
  Help_Phone_IOS: '~+852 3070 5005',
  Help_Phone_Android: '+852 3070 5005',
  Help_Contact_mail_IOS: '~medicalservice@axa.com.hk',
  Help_Contact_mail_ANDROID: 'medicalservice@axa.com.hk',
  Help_Frequently_asked_Question_IOS: '~Frequently asked questions',
  Help_Frequently_asked_Question_ANDROID: 'Frequently asked questions',
  Customer_Support_hour_IOS: '~Customer support hours',
  Customer_Support_hour_ANDROID: 'Customer support hours',
  HelpCallFunction_Android:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]',
  HelpCallFunction_IOS: '',
  HelpEmailFunction_Android: 'medicalservice@axa.com.hk',
  HelpEmailFunction_IOS: 'medicalservice@axa.com.hk',

  viewFor_IOS:
    '(//XCUIElementTypeOther[@name="View for, current selection is William Brown"])[4]',
  viewFor_Android:
    '//android.view.ViewGroup[@content-desc="View for, current selection is William Brown"]/android.view.ViewGroup',

  SelectView_IOS: '(//XCUIElementTypeOther[@name="Charlotte Brown Tan"])[2]',
  SelectView_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup',
  toFirst_eHealthcard_IOS:
    '~HSBC Health Plus Name: William Brown Membership No: 0000123 Copayment GP: $50 SP: $20 PHY: $20',
  toFirst_eHealthcard_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]',
  toSecond_eHealthcard_IOS:
    '~HSBC Health Plus Name: Catherine Brown Tan Membership No: 0000124 Copayment GP: $50 SP: $20 PHY: $20',
  toSecond_eHealthcard_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]',
  toThird_eHealthcard_IOS:
    '~HSBC Health Plus Name: George Brown Tan Membership No: 0000125 Copayment GP: $50 SP: $20 PHY: $20',
  toThird_eHealthcard_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]',
  toFourth_eHealthcard_IOS:
    '//XCUIElementTypeOther[@name="HSBC Health Plus Name: Charlotte Brown Tan Membership No: 0000126 Copayment GP: $50 SP: $20 PHY: $20"]',
  toFifth_eHealthcard_IOS:
    '//XCUIElementTypeOther[@name="HSBC Health Plus Name: Louis Brown Tan Membership No: 0000127 Copayment GP: $50 SP: $20 PHY: $20"]',
  toFourth_eHealthcard_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]',
  toFifth_eHealthcard_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]',

  logoutBtn_Android: 'Log out',
  logoutBtn_IOS: '(//XCUIElementTypeOther[@name="Log out"])[2]',
  welcome_Screen_IOS: '~Welcome to',
  welcome_Screen_Android: 'Welcome to',
  languagetab_IOS: '~Language',
  languagetab_Android: 'Language',
  checkLanguage_IOS: '~電子健康卡',
  checkLanguage_Android: '電子健康卡',

  //App Version
  AppVersion_IOS: `App version ${ios_Version.version} [DEVELOPMENT]`,
  AppVersion_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView',

  Frequently_asked_que_IOS: '~Frequently asked questions',
  Frequently_asked_que_ANDROID:
    '//android.view.ViewGroup[@content-desc="Frequently asked questions"]',
  Coverage_IOS: '~Coverage',
  Coverage_ANDROID: '~Coverage',
  Membership_Servicing_IOS: '~Policy/Membership Servicing',
  Membership_Servicing_ANDROID: '~Policy/Membership Servicing',
  Claims_Statement_IOS: '~Claims – Statement/Receipts',
  Claims_Statement_ANDROID: '~Claims – Statement/Receipts',
  Claims_Status_IOS: '~Claims Status',
  Claims_Status_ANDROID: '~Claims Status',
  Claims_Outpatient_IOS: '~Claims – Outpatient',
  Claims_Outpatient_ANDROID: '~Claims – Outpatient',
  Claims_Inpatient_IOS: '~Claims – Inpatient',
  Claims_Inpatient_ANDROID: '~Claims – Inpatient',
  Claims_General_IOS: '~Claims - General',
  Claims_General_ANDROID: '~Claims - General',

  Support_hours_Android: 'Customer support hours',
  Support_hours_IOS: '~Customer support hours',

  Red_SelectView_Android:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup',
  Red_SelectView_IOS:
    '(//XCUIElementTypeOther[@name="Catherine Brown Tan"])[2]',
  blue_Tier_Android:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView',
  blue_Tier_IOS:
    '//XCUIElementTypeStaticText[@name="Tier III(Employee) - Employee and dependent"]',
  Red_Tier_Android:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView',

  Red_Tier_IOS:
    '//XCUIElementTypeStaticText[@name="Tier I - Employee and dependent"]',

  Terms_Android: '~Terms and conditions',
  Terms_IOS: '~Terms and conditions',
  Policy_Android: '~Privacy policy',
  Policy_IOS: '~Privacy policy',
  TermsScreen_Android:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView',
  TermsScreen_IOS: '//XCUIElementTypeStaticText[@name="Terms and conditions"]',
  PolicyScreen_Android:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView',
  PolicyScreen_IOS: '//XCUIElementTypeStaticText[@name="Privacy policy"]'
};

class ProfileScreen extends AppScreen {
  constructor() {
    super(SELECTORS.USEFUL_DOCUMENT_IOS);
    this.platform = getPlatform().toLowerCase();
  }

  get effectivePeriod() {
    if (this.platform === 'ios') return $(SELECTORS.EFFECTIVE_PERIOD_IOS);
    return $(txt(SELECTORS.EFFECTIVE_PERIOD_ANDROID));
  }

  get insurer() {
    if (this.platform === 'ios') return $(SELECTORS.INSURER_IOS);
    return $(SELECTORS.INSURER_ANDROID);
  }

  get policyNumber() {
    if (this.platform === 'ios') return $(SELECTORS.POLICY_NUMBER_IOS);
    return $(SELECTORS.POLICY_NUMBER_ANDROID);
  }

  get wellnessFlexibleSpendingAmount() {
    if (this.platform === 'ios')
      return $(SELECTORS.WELLNESS_FLEXIBLE_SPENDING_AMOUNT_IOS);
    return $(SELECTORS.WELLNESS_FLEXIBLE_SPENDING_AMOUNT_ANDROID);
  }

  get maternitySubsidy() {
    if (this.platform === 'ios') return $(SELECTORS.MATERNITY_SUBSIDY_IOS);
    return $(SELECTORS.MATERNITY_SUBSIDY_ANDROID);
  }

  get supplimentalMajorMedical() {
    if (this.platform === 'ios')
      return $(SELECTORS.SUPPLIMENTAL_MAJOR_MEDICAL_IOS);
    return $(SELECTORS.SUPPLIMENTAL_MAJOR_MEDICAL_ANDROID);
  }

  get hospitalSurgical() {
    if (this.platform === 'ios') return $(SELECTORS.HOSPITAL_SURGICAL_IOS);
    return $(SELECTORS.HOSPITAL_SURGICAL_ANDROID);
  }

  get outpatients() {
    if (this.platform === 'ios') return $(SELECTORS.OUTPATIENTS_IOS);
    return $(SELECTORS.OUTPATIENTS_ANDROID);
  }

  get employeeDependants() {
    if (this.platform === 'ios')
      return $(txt(SELECTORS.EMPLOYEES_DEPENDANTS_IOS));
    return $(SELECTORS.EMPLOYEES_DEPENDANTS_ANDROID);
  }

  get dropdownForBenefitCard() {
    if (this.platform === 'ios') return $(SELECTORS.DROPDOWN_SELECTED_IOS);
    return $(txt(SELECTORS.DROPDOWN_SELECTED_ANDROID));
  }

  get myBenefit() {
    if (this.platform === 'ios') return $(SELECTORS.MY_BENEFITS_IOS);
    return $(txt(SELECTORS.MY_BENEFITS_ANDROID));
  }

  get eHealthCard() {
    if (this.platform === 'ios') return $(SELECTORS.EHEALTH_CARD_IOS);
    return $(txt(SELECTORS.EHEALTH_CARD_ANDROID));
  }

  get swipeFirstHealthCard() {
    if (this.platform === 'ios') return $(SELECTORS.SWIPE_FIRST_CARD_IOS);
    return $(SELECTORS[`SWIPE_FIRST_CARD_ANDROID`]);
  }

  get wellnessClaimForm() {
    if (this.platform === 'ios') return $(SELECTORS.WELLNESS_CLAIM_FORM_IOS);
    return $(SELECTORS.WELLNESS_CLAIM_FORM_ANDROID);
  }

  get shareButton() {
    if (this.platform === 'ios') return $(SELECTORS.SHARE_BUTTON_IOS);
    return $(SELECTORS[`SHARE_BUTTON_ANDROID`]);
  }

  get shareScreen() {
    if (this.platform === 'ios') return $(SELECTORS.SHARE_SCREEN_IOS);
    return $(SELECTORS[`SHARE_SCREEN_ANDROID`]);
  }

  get ShareWindow() {
    if (this.platform === 'ios') return $('');
    return $(SELECTORS.ShareWindow_Android);
  }

  get bluetooth() {
    if (this.platform === 'ios') return $('');
    return $(txt(SELECTORS.bluetooth_Android));
  }

  get bluetoothCancle() {
    if (this.platform === 'ios') return $('');
    return $(SELECTORS.bluetoothCancle_Android);
  }

  get cancleBtn() {
    return $(SELECTORS.CANCLE_BUTTON_IOS);
  }

  get headerBack() {
    if (this.platform === 'ios') return $(SELECTORS.HEADER_BACK_IOS);
    return $(SELECTORS[`HEADER_BACK_ANDROID`]);
  }

  get usefullDocument() {
    if (this.platform === 'ios') return $(SELECTORS.USEFUL_DOCUMENT_IOS);
    return $(txt(SELECTORS.USEFUL_DOCUMENT_ANDROID));
  }

  get maternitySubsidyClaimForm() {
    if (this.platform === 'ios')
      return $(SELECTORS.MATERNITY_SUBSIDY_CLAIM_FORM_IOS);
    return $(SELECTORS.MATERNITY_SUBSIDY_CLAIM_FORM_ANDROID);
  }

  get hospitalizationSurgicalClaimForm() {
    if (this.platform === 'ios')
      return $(SELECTORS.HOSPITALISATION_SURGICAL_CLAIM_FORM_IOS);
    return $(SELECTORS[`HOSPITALISATION_SURGICAL_CLAIM_FORM_ANDROID`]);
  }

  get upLoadPDF() {
    return $(SELECTORS[`PDF_LOAD_ANDROID`]);
  }

  get selectDependant() {
    if (this.platform === 'ios') return $(txt(SELECTORS.SELECT_DEPENDANT_IOS));
    return $(txt(SELECTORS.SELECT_DEPENDANT_ANDROID));
  }
  get dependantsEmployee() {
    if (this.platform === 'ios') return $(SELECTORS.DEPENDANT_EMPLOYEE_IOS);
    return $(SELECTORS.DEPENDANT_EMPLOYEE_ANDROID);
  }

  get QR() {
    if (this.platform === 'ios') return $(SELECTORS.QR_IOS);
    return $(SELECTORS.QR_ANDROID);
  }

  get MyDetails() {
    if (this.platform === 'ios') return $(SELECTORS.MyDetails_IOS);
    return $(txt(SELECTORS.MyDetails_ANDROID));
  }

  get Help() {
    if (this.platform === 'ios') return $(SELECTORS.Help_IOS);
    return $(txt(SELECTORS.Help_ANDROID));
  }

  get Settings() {
    if (this.platform === 'ios') return $(SELECTORS.Settings_IOS);
    return $(txt(SELECTORS.Settings_ANDROID));
  }

  //OUTPATIENT IOS
  get general_medical_practitioner() {
    if (this.platform === 'ios')
      return $(SELECTORS.general_medical_practitioner_IOS);
    return $(txt(SELECTORS.general_medical_practitioner_Android));
  }

  get Specialist() {
    if (this.platform === 'ios') return $(SELECTORS.Specialist_IOS);
    return $(txt(SELECTORS.Specialist_Android));
  }

  get Physiotherapy() {
    if (this.platform === 'ios') return $(SELECTORS.Physiotherapy_IOS);
    return $(txt(SELECTORS.Physiotherapy_Android));
  }

  get Mental_illness() {
    if (this.platform === 'ios') return $(SELECTORS.Mental_illness_IOS);
    return $(txt(SELECTORS.Mental_illness_Android));
  }

  get Diagnostic_x_ray() {
    if (this.platform === 'ios') return $(SELECTORS.Diagnostic_x_ray_IOS);
    return $(txt(SELECTORS.Diagnostic_x_ray_Android));
  }

  get Medication_purchased() {
    if (this.platform === 'ios') return $(SELECTORS.Medication_purchased_IOS);
    return $(txt(SELECTORS.Medication_purchased_Android));
  }

  //Hospital and Surgical-IOS

  get Room_Board_nursing() {
    if (this.platform === 'ios') return $(SELECTORS.Room_Board_nursing_IOS);
    return $(txt(SELECTORS.Room_Board_nursing_Android));
  }

  get Room_Board_nursing_limit() {
    if (this.platform === 'ios')
      return $(SELECTORS.Room_Board_nursing_limit_IOS);
    return $(txt(SELECTORS.Room_Board_nursing_limit_Android));
  }

  get Room_Board_nursing_disability() {
    if (this.platform === 'ios')
      return $(SELECTORS.Room_Board_nursing_disability_IOS);
    return $(txt(SELECTORS.Room_Board_nursing_disability_Android));
  }

  get Intensive_care() {
    if (this.platform === 'ios') return $(SELECTORS.Intensive_care_IOS);
    return $(txt(SELECTORS.Intensive_care_Android));
  }

  get Meal_subsidy() {
    if (this.platform === 'ios') return $(SELECTORS.Meal_subsidy_IOS);
    return $(txt(SELECTORS.Meal_subsidy_Android));
  }

  get Hospital_Service() {
    if (this.platform === 'ios') return $(SELECTORS.Hospital_Service_IOS);
    return $(txt(SELECTORS.Hospital_Service_Android));
  }

  get Physician_Services() {
    if (this.platform === 'ios') return $(SELECTORS.Physician_Services_IOS);
    return $(txt(SELECTORS.Physician_Services_Android));
  }

  get In_Hospital() {
    if (this.platform === 'ios') return $(SELECTORS.In_Hospital_IOS);
    return $(txt(SELECTORS.In_Hospital_Android));
  }

  get Surgeon_fees() {
    if (this.platform === 'ios') return $(SELECTORS.Surgeon_fees_IOS);
    return $(txt(SELECTORS.Surgeon_fees_Android));
  }

  get Surgeon_fees_Complex() {
    if (this.platform === 'ios') return $(SELECTORS.Surgeon_fees_Complex_IOS);
    return $(txt(SELECTORS.Surgeon_fees_Complex_Android));
  }

  get Surgeon_fees_Major() {
    if (this.platform === 'ios') return $(SELECTORS.Surgeon_fees_Major_IOS);
    return $(txt(SELECTORS.Surgeon_fees_Major_Android));
  }

  get Surgeon_fees_Inter() {
    if (this.platform === 'ios') return $(SELECTORS.Surgeon_fees_Inter_IOS);
    return $(txt(SELECTORS.Surgeon_fees_Inter_Android));
  }

  get Surgeon_fees_Minor() {
    if (this.platform === 'ios') return $(SELECTORS.Surgeon_fees_Minor_IOS);
    return $(txt(SELECTORS.Surgeon_fees_Minor_Android));
  }

  get Anaesthetist() {
    if (this.platform === 'ios') return $(SELECTORS.Anaesthetist_IOS);
    return $(txt(SELECTORS.Anaesthetist_Android));
  }

  get Anaesthetist_Complex() {
    if (this.platform === 'ios') return $(SELECTORS.Anaesthetist_Complex_IOS);
    return $(txt(SELECTORS.Anaesthetist_Complex_Android));
  }

  get Anaesthetist_Major() {
    if (this.platform === 'ios') return $(SELECTORS.Anaesthetist_Major_IOS);
    return $(txt(SELECTORS.Anaesthetist_Major_Android));
  }

  get Anaesthetist_Inter() {
    if (this.platform === 'ios') return $(SELECTORS.Anaesthetist_Inter_IOS);
    return $(txt(SELECTORS.Anaesthetist_Inter_Android));
  }

  get Anaesthetist_Minor() {
    if (this.platform === 'ios') return $(SELECTORS.Anaesthetist_Minor_IOS);
    return $(txt(SELECTORS.Anaesthetist_Minor_Android));
  }

  get Operating() {
    if (this.platform === 'ios') return $(SELECTORS.Operating_IOS);
    return $(txt(SELECTORS.Operating_Android));
  }

  get Operating_Complex() {
    if (this.platform === 'ios') return $(SELECTORS.Operating_Complex_IOS);
    return $(txt(SELECTORS.Operating_Complex_Android));
  }

  get Operating_major() {
    if (this.platform === 'ios') return $(SELECTORS.Operating_major_IOS);
    return $(txt(SELECTORS.Operating_major_Android));
  }

  get Operating_Inter() {
    if (this.platform === 'ios') return $(SELECTORS.Operating_Inter_IOS);
    return $(txt(SELECTORS.Operating_Inter_Android));
  }

  get Operating_Minor() {
    if (this.platform === 'ios') return $(SELECTORS.Operating_Minor_IOS);
    return $(txt(SELECTORS.Operating_Minor_Android));
  }

  get Annual_Overall_limit() {
    if (this.platform === 'ios') return $(SELECTORS.Annual_Overall_limit_IOS);
    return $(txt(SELECTORS.Annual_Overall_limit_Android));
  }

  get Supplimental() {
    if (this.platform === 'ios')
      return $(SELECTORS.SUPPLIMENTAL_MAJOR_MEDICAL_IOS);
    return $(txt(SELECTORS.SUPPLIMENTAL_MAJOR_MEDICAL_MAX_ANDROID));
  }

  get Maternity_Antenatal() {
    if (this.platform === 'ios') return $(SELECTORS.ANTENATAL_CHECKUP_IOS);
    return $(txt(SELECTORS.ANTENATAL_CHECKUP_ANDROID));
  }

  get Maternity_Lump() {
    if (this.platform === 'ios') return $(SELECTORS.LUMP_SUM_BENEFIT_MAX_IOS);
    return $(txt(SELECTORS.LUMP_SUM_BENEFIT_MAX_ANDROID));
  }

  get WellnessMax() {
    if (this.platform === 'ios') return $(SELECTORS.WELLNESS_MAX_LIMIT_IOS);
    return $(txt(SELECTORS.WELLNESS_MAX_LIMIT_ANDROID));
  }

  get Help_Phone() {
    if (this.platform === 'ios') return $(SELECTORS.Help_Phone_IOS);
    return $(txt(SELECTORS.Help_Phone_Android));
  }

  get Help_Contact_mail() {
    if (this.platform === 'ios') return $(SELECTORS.Help_Contact_mail_IOS);
    return $(txt(SELECTORS.Help_Contact_mail_ANDROID));
  }

  get Help_Frequently_asked_Question() {
    if (this.platform === 'ios')
      return $(SELECTORS.Help_Frequently_asked_Question_IOS);
    return $(txt(SELECTORS.Help_Frequently_asked_Question_ANDROID));
  }

  get Customer_Support_hour() {
    if (this.platform === 'ios') return $(SELECTORS.Customer_Support_hour_IOS);
    return $(txt(SELECTORS.Customer_Support_hour_ANDROID));
  }

  get HelpCallFunction() {
    if (this.platform === 'ios') return $(SELECTORS.Help_Phone_IOS);
    return $(SELECTORS.HelpCallFunction_Android);
  }

  get HelpEmailFunction() {
    if (this.platform === 'ios') return $(SELECTORS.Help_Contact_mail_IOS);
    return $(txt(SELECTORS.HelpEmailFunction_Android));
  }
  get Chinese() {
    if (this.platform === 'ios') return $('~中文 (繁體)');
    return $('//android.view.ViewGroup[@content-desc="中文 (繁體)"]');
  }

  get SettingInChinese() {
    if (this.platform === 'ios') return $('~設定');
    return $(
      '//android.view.ViewGroup[@content-desc="設定"]/android.widget.TextView'
    );
  }

  get ClickOnLanguage() {
    if (this.platform === 'ios') return $('~語言');
    return $('//android.view.ViewGroup[@content-desc="語言"]');
  }

  get ChooseEnglishLanguage() {
    if (this.platform === 'ios') return $('~English (Hong Kong)');
    return $(txt('English (Hong Kong)'));
  }

  get viewFor() {
    if (this.platform === 'ios') return $(SELECTORS.viewFor_IOS);
    return $(SELECTORS.viewFor_Android);
  }

  get SelectView() {
    if (this.platform === 'ios') return $(SELECTORS.SelectView_IOS);
    return $(SELECTORS.SelectView_ANDROID);
  }

  get toFirst_eHealthcard() {
    if (this.platform === 'ios') return $(SELECTORS.toFirst_eHealthcard_IOS);
    return $(SELECTORS.toFirst_eHealthcard_ANDROID);
  }

  get toSecond_eHealthcard() {
    if (this.platform === 'ios') return $(SELECTORS.toSecond_eHealthcard_IOS);
    return $(SELECTORS.toSecond_eHealthcard_ANDROID);
  }

  get toThird_eHealthcard() {
    if (this.platform === 'ios') return $(SELECTORS.toThird_eHealthcard_IOS);
    return $(SELECTORS.toThird_eHealthcard_ANDROID);
  }

  get toFourth_eHealthcard() {
    if (this.platform === 'ios') return $(SELECTORS.toFourth_eHealthcard_IOS);
    return $(SELECTORS.toFourth_eHealthcard_ANDROID);
  }

  get toFifth_eHealthcard() {
    if (this.platform === 'ios') return $(SELECTORS.toFifth_eHealthcard_IOS);
    return $(SELECTORS.toFifth_eHealthcard_ANDROID);
  }

  get logoutBtn() {
    if (this.platform === 'ios') return $(SELECTORS.logoutBtn_IOS);
    return $(txt(SELECTORS.logoutBtn_Android));
  }

  get welcomeScreen() {
    if (this.platform === 'ios') return $(SELECTORS.welcome_Screen_IOS);
    return $(txt(SELECTORS.welcome_Screen_Android));
  }

  get languagetab() {
    if (this.platform === 'ios') return $(SELECTORS.languagetab_IOS);
    return $(txt(SELECTORS.languagetab_Android));
  }

  get checkLanguage() {
    if (this.platform === 'ios') return $(SELECTORS.checkLanguage_IOS);
    return $(txt(SELECTORS.checkLanguage_Android));
  }

  get dial() {
    if (this.platform === 'ios') return $('~dial');
    return $('~dial');
  }

  get endCall() {
    if (this.platform === 'ios') return $('~End call');
    return $('~End call');
  }

  get NextBtn() {
    if (this.platform === 'ios') return $('~Next');
    return $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.support.v4.view.ViewPager/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView[1]'
    );
  }

  get AppVersion() {
    if (this.platform === 'ios') return $(txt(SELECTORS.AppVersion_IOS));
    return $(SELECTORS.AppVersion_ANDROID);
  }

  get Frequently_asked_que() {
    if (this.platform === 'ios') return $(SELECTORS.Frequently_asked_que_IOS);
    return $(SELECTORS.Frequently_asked_que_ANDROID);
  }

  get Coverage() {
    if (this.platform === 'ios') return $(SELECTORS.Coverage_IOS);
    return $(SELECTORS.Coverage_ANDROID);
  }

  get Membership_Servicing() {
    if (this.platform === 'ios') return $(SELECTORS.Membership_Servicing_IOS);
    return $(SELECTORS.Coverage_ANDROID);
  }

  get Claims_Statement() {
    if (this.platform === 'ios') return $(SELECTORS.Claims_Statement_IOS);
    return $(SELECTORS.Claims_Statement_ANDROID);
  }

  get Claims_Status() {
    if (this.platform === 'ios') return $(SELECTORS.Claims_Status_IOS);
    return $(SELECTORS.Claims_Status_ANDROID);
  }

  get Claims_Outpatient() {
    if (this.platform === 'ios') return $(SELECTORS.Claims_Outpatient_IOS);
    return $(SELECTORS.Claims_Outpatient_ANDROID);
  }

  get Claims_Inpatient() {
    if (this.platform === 'ios') return $(SELECTORS.Claims_Inpatient_IOS);
    return $(SELECTORS.Claims_Inpatient_ANDROID);
  }

  get Claims_General() {
    if (this.platform === 'ios') return $(SELECTORS.Claims_General_IOS);
    return $(SELECTORS.Claims_General_ANDROID);
  }

  get Support_hours() {
    if (this.platform === 'ios') return $(SELECTORS.Support_hours_IOS);
    return $(txt(SELECTORS.Support_hours_Android));
  }

  get Red_viewFor() {
    if (this.platform === 'ios')
      return $(
        '(//XCUIElementTypeOther[@name="View for, current selection is William Brown"])[4]'
      ); //(//XCUIElementTypeOther[@name="View for, current selection is Charlotte Brown Tan"])[4]
    return $(
      '//android.view.ViewGroup[@content-desc="View for, current selection is William Brown"]/android.view.ViewGroup'
    ); // //android.view.ViewGroup[@content-desc="View for, current selection is Charlotte Brown Tan"]/android.view.ViewGroup
  }

  get Red_SelectView() {
    if (this.platform === 'ios') return $(SELECTORS.Red_SelectView_IOS);
    return $(SELECTORS.Red_SelectView_Android);
  }

  get blue_Tier() {
    if (this.platform === 'ios') return $(SELECTORS.blue_Tier_IOS);
    return $(SELECTORS.blue_Tier_Android);
  }

  get Red_Tier() {
    if (this.platform === 'ios') return $(SELECTORS.Red_Tier_IOS);
    return $(SELECTORS.Red_Tier_Android);
  }

  get Terms() {
    if (this.platform === 'ios') return $(SELECTORS.Terms_IOS);
    return $(SELECTORS.Terms_Android);
  }

  get Policy() {
    if (this.platform === 'ios') return $(SELECTORS.Policy_IOS);
    return $(SELECTORS.Policy_Android);
  }

  get TermsScreen() {
    if (this.platform === 'ios') return $(SELECTORS.TermsScreen_IOS);
    return $(SELECTORS.TermsScreen_Android);
  }

  get PolicyScreen() {
    if (this.platform === 'ios') return $(SELECTORS.PolicyScreen_IOS);
    return $(SELECTORS.PolicyScreen_Android);
  }

  get TnC() {
    if (this.platform === 'ios')
      return $('~By logging in you agree to our terms and conditions.');
    return $(txt('By logging in you agree to our terms and conditions.'));
  }

  get TnC_BackBtn() {
    if (this.platform === 'ios') return $('~header-back');
    return $(txt(''));
  }

  get ForgotLink() {
    if (this.platform === 'ios')
      return $('(//XCUIElementTypeOther[@name="Forgot your password?"])[2]');
    return $(txt('Forgot your password?'));
  }

  get CompanyName() {
    if (this.platform === 'ios') return $('~Company name');
    return $('~Company name');
  }

  get ResetEmail() {
    if (this.platform === 'ios') return $('~Email address');
    return $('~Email address');
  }

  get ResetBtn() {
    if (this.platform === 'ios')
      return $('(//XCUIElementTypeOther[@name="Reset password"])[4]');
    return $('~Reset password');
  }

  get ClickOnOk() {
    if (this.platform === 'ios')
      return $('//XCUIElementTypeButton[@name="OK"]');
    return $(
      '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button'
    );
  }

  get forgotPasswordScreen() {
    if (this.platform === 'ios')
      return $('//XCUIElementTypeStaticText[@name="Forgot your password?"]');
    return $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]'
    );
  }

  get alertBox() {
    if (this.platform === 'ios')
      return $('//XCUIElementTypeAlert[@name="Check your email"]');
    return $(
      '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView'
    );
  }

  get LoginTermsScreen() {
    if (this.platform === 'ios')
      return $('//XCUIElementTypeStaticText[@name="Terms and conditions"]');
    return $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView'
    );
  }
}

export default new ProfileScreen();