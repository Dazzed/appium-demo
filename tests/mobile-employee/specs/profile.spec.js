import { loginAs } from '../actions/login.action';
import { validCredentials1 } from '../../data/login.data';
import * as profile from '../actions/profile.action';

describe('Employee should be', () => {
  beforeAll(() => {
    loginAs(validCredentials1);
  });

  // Landing Page
  fit('able to view landing page', () => {
    expect(profile.profileLandingPage()).toBeTruthy();
  });

  //e-Health Card
  fit('able to view employee e-health card', () => {
    expect(profile.eHealthCardVerification()).toBeTruthy();
  });

  it('able to view dependants e-health card', () => {
    expect(profile.eHealthCardSwipeVerification()).toBeTruthy();
  });

  it('able to scroll and see the different cards', () => {
    expect(profile.scrollRightToLeft()).toBeTruthy();
  });

  it('able to verify dependant under "Tier III" will have a blue card', () => {
    expect(profile.blue_CardColor()).toBeTruthy();
  });

  it('able to verify dependant not under "Tier III" will have a red card', () => {
    expect(profile.Red_CardColor()).toBeTruthy();
  });

  it('able to scan the QR code of the selected e-health card', () => {
    expect(profile.Get_QR_Code_data()).toBeTruthy();
  });

  //My benefits
  it('able to view my benefits', () => {
    expect(profile.myBenefits()).toBeTruthy();
  });

  it('able to view dependant details', () => {
    expect(profile.DependantMyBenefits()).toBeTruthy();
  });

  it('able to view my benefits details', () => {
    expect(profile.MyBenefitsDetails()).toBeTruthy();
  });

  it('able to view Outpatient information', () => {
    expect(profile.OutpatientDetails()).toBeTruthy();
  });

  it('able to view Hospital and Surgical information', () => {
    expect(profile.Hospital_and_Surgical_Details()).toBeTruthy();
  });

  it('able to view Supplementary major medical information', () => {
    expect(profile.SupplementaryDetails()).toBeTruthy();
  });

  it('able to view Maternity subsidy information', () => {
    expect(profile.MaternityDetails()).toBeTruthy();
  });

  it('able to view Wellness flexible spending ammount information', () => {
    expect(profile.WellnessDetails()).toBeTruthy();
  });

  //My deatils
  it('able to view My Details', () => {
    expect(profile.MyDetailsPage()).toBeTruthy();
  });

  //Useful Documents
  it('able to view wellness claim forms & documents', () => {
    expect(profile.formsAndDocumentsWellnessClaim()).toBeTruthy();
  });

  it('able to view maternity subsidy forms & documents', () => {
    expect(profile.formsAndDocumentsMaternitySubsidy()).toBeTruthy();
  });

  it('able to view hospital surgical forms & documents', () => {
    expect(profile.formsAndDocumentsHospitalSurgical()).toBeTruthy();
  });

  //Help
  it('able to view Help', () => {
    expect(profile.HelpPage()).toBeTruthy();
  });

  it('able to call for help', () => {
    expect(profile.CallForhelp()).toBeTruthy();
  });

  it('able to Email for help', () => {
    expect(profile.EmailForhelp()).toBeTruthy();
  });

  it('able to view Frequently asked questions', () => {
    expect(profile.Frequently_asked_questions()).toBeTruthy();
  });

  it('able to view Customer support hours', () => {
    expect(profile.Customer_support_hours()).toBeTruthy();
  });

  //Settings
  it('able to change application language', () => {
    expect(profile.ChangeLanguage()).toBeTruthy();
  });

  it('able to view Terms and Conditions', () => {
    expect(profile.TermAndCondition()).toBeTruthy();
  });

  it('able to view Privacy Policy', () => {
    expect(profile.PrivacyPolicy()).toBeTruthy();
  });

  it('able view app version', () => {
    expect(profile.appVersion()).toBeTruthy();
  });

  it('able to logout', () => {
    expect(profile.logout()).toBeTruthy();
  });

  it('able to click and redirected to the terms and conditions page', () => {
    expect(profile.login_TermAndCondition()).toBeTruthy();
  });

  it('able to click and redirected to reset password page', () => {
    expect(profile.forgotPassword()).toBeTruthy();
  });

  afterAll(() => {
    driver.reset();
  });
});