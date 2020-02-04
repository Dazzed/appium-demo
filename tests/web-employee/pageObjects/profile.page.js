import Page from './app.page';
import { cardDate } from './SystemDate';

const SELECTORS = {
  Me: "//button[@data-testid='nav-me']",
  EHealthCard: "(//button[@data-testid='healthCard'])[1]",
  EHealthScreenPage: "(//div[text()='e-Health card'])[2]",
  Benefit: "//button[@data-testid='benefits']",
  MyBenefitPageScreen: "//div[text()='My Benefits']",
  Details: "//button[@data-testid='details']",
  DetailsScreenPage: "(//div[text()='Details'])[2]",
  usefulDocuments: "//button[@data-testid='usefulDocuments']",
  usefulDocumentsScreenPage: "(//div[text()='Useful Document'])",
  Help: "//button[@data-testid='help']",
  HelpScreenPage: "(//div[text()='Help'])[2]",
  Settings: "//button[@data-testid='settings']",
  SettingScreenPage: "(//div[text()='Settings'])[2]",
  VirtualCardName: "(//div[text()='Name:'])[1]",
  VirtualCardMembership: "(//div[text()='Membership No:'])[1]",
  VirtualCardDate: `(//div[text()='${cardDate.Date}'])[1]`,
  PolicyDetails: "//div[text()='Policy Details']",
  PolicyNumDetails: "//div[text()='10288801GH']",
  InsurerDetailsText: "//div[text()='AXA General Insurance Hong Kong Limited']",
  Eff_Period: "//div[text()='1 Jan 2019 - 31 Dec 2019']",
  BenefitSelect: "//div[@data-testid='select-benefit-plan']",
  BenefitTier:
    "//li[@data-value='Shiva Test ( Tier I - Employee and dependent)']",
  BenefitOutpatient: "//div[text()='Outpatient']/parent::a",
  BenefitHospitalSurgical: "//div[text()='Hospital and Surgical']/parent::a",
  BenefitSupplementary: "//div[text()='Supplemental major medical']/parent::a",
  GeneralPractitionerText: "//div[text()='General medical practitioner']",
  SpecialistText: "//div[text()='Specialist']",
  PhysiotherapyText: "//div[text()='Physiotherapy']",
  MentalIllnessText: "//div[text()='Mental illness & emotional disorder']",
  DiagnosticText:
    "//div[text()='Diagnostic x-ray, laboratory tests & imaging']",
  MedicationPurchasedText: '',
  OutpatientText: "//div[@id='Outpatient']/div[text()='Outpatient']",
  HospitalSurgicalText:
    "//div[@id='Hospital and Surgical']/div[text()='Hospital and Surgical']",
  RoomCareText: "//div[text()='Room, board & general nursing care']",
  IntensiveCareText: "//div[text()='Intensive care']",
  MealSubsidyText: "//div[text()='Meal subsidy']",
  HospitalServiceText: "//div[text()='Hospital services']",
  PhysicianServiceText: "//div[text()='Physician services³']",
  InhospitalText: "//div[text()='In-hospital specialist fees']",
  SurgeonFeeText: "//div[text()='Surgeon fees']",
  OperatingTheatreText: "//div[text()='Operating theatre charge']",
  AnnualLimitText: "//div[text()='Annual overall limit⁴']",
  SupplementaryText:
    "//div[@id='Supplemental major medical']/div[text()='Supplemental major medical']",
  SupplementaryLimitText: "//div[text()='Supplmentary major medical']",
  Maternity: "//div[text()='Maternity subsidy']/parent::a",
  MaternityHeader:
    "//div[@id='Maternity subsidy']/div[text()='Maternity subsidy']",
  Antenatal: "//div[text()='Antenatal / post-natal check up']",
  LumpSum: "//div[text()='Lump sum benefit max limit per pregnancy']",
  Wellness: "//div[text()='Wellness flexible spending amount']/parent::a",
  WellnessHeader:
    "//div[@id='Wellness flexible spending amount']/div[text()='Wellness flexible spending amount']",
  MaxLimit: "//div[text()='Max limit']"
};

class ProfilePage extends Page {
  constructor() {
    super(SELECTORS.Me);
  }

  get MePage() {
    return $(SELECTORS.Me);
  }

  get EHealthCardPage() {
    return $(SELECTORS.EHealthCard);
  }

  get EHealthScreen() {
    return $(SELECTORS.EHealthScreenPage);
  }

  get BenefitPage() {
    return $(SELECTORS.Benefit);
  }

  get BenefitScreen() {
    return $(SELECTORS.MyBenefitPageScreen);
  }

  get DetailsPage() {
    return $(SELECTORS.Details);
  }

  get DetailsScreen() {
    return $(SELECTORS.DetailsScreenPage);
  }

  get UsefulDocumentsPage() {
    return $(SELECTORS.usefulDocuments);
  }

  get UsefulDocumentScreen() {
    return $(SELECTORS.usefulDocumentsScreenPage);
  }

  get HelpPage() {
    return $(SELECTORS.Help);
  }

  get HelpScreen() {
    return $(SELECTORS.HelpScreenPage);
  }

  get SettingPage() {
    return $(SELECTORS.Settings);
  }

  get SettingScreen() {
    return $(SELECTORS.SettingScreenPage);
  }

  get virtualCardsName() {
    return $(SELECTORS.VirtualCardName);
  }

  get virtualCardsMembership() {
    return $(SELECTORS.VirtualCardMembership);
  }

  get virtualCardDate() {
    return $(SELECTORS.VirtualCardDate);
  }

  get PolicyDetailsText() {
    return $(SELECTORS.PolicyDetails);
  }

  get PolicyNum() {
    return $(SELECTORS.PolicyNumDetails);
  }

  get InsurerDetails() {
    return $(SELECTORS.InsurerDetailsText);
  }

  get EffectiveDate() {
    return $(SELECTORS.Eff_Period);
  }

  get SelectBenefit() {
    return $(SELECTORS.BenefitSelect);
  }

  get TierLink() {
    return $(SELECTORS.BenefitTier);
  }

  get OutpatientLink() {
    return $(SELECTORS.BenefitOutpatient);
  }

  get HospitalSurgicalLink() {
    return $(SELECTORS.BenefitHospitalSurgical);
  }

  get SupplementaryLink() {
    return $(SELECTORS.BenefitSupplementary);
  }

  get OutpatientHeader() {
    return $(SELECTORS.OutpatientText);
  }

  get GeneralPractitioner() {
    return $(SELECTORS.GeneralPractitionerText);
  }

  get Specialist() {
    return $(SELECTORS.SpecialistText);
  }

  get Physiotherapy() {
    return $(SELECTORS.PhysiotherapyText);
  }

  get MentalIllness() {
    return $(SELECTORS.MentalIllnessText);
  }

  get Diagnostic() {
    return $(SELECTORS.DiagnosticText);
  }

  get MedicationPurchased() {
    return $(SELECTORS.MedicationPurchasedText);
  }

  get HospitalSurgicalHeader() {
    return $(SELECTORS.HospitalSurgicalText);
  }

  get RoomCare() {
    return $(SELECTORS.RoomCareText);
  }

  get IntensiveCare() {
    return $(SELECTORS.IntensiveCareText);
  }

  get MealSubsidy() {
    return $(SELECTORS.MealSubsidyText);
  }

  get HospitalService() {
    return $(SELECTORS.HospitalServiceText);
  }

  get PhysicianService() {
    return $(SELECTORS.PhysicianServiceText);
  }

  get Inhospital() {
    return $(SELECTORS.InhospitalText);
  }

  get SurgeonFee() {
    return $(SELECTORS.SurgeonFeeText);
  }

  get OperatingTheatre() {
    return $(SELECTORS.OperatingTheatreText);
  }

  get AnnualLimit() {
    return $(SELECTORS.AnnualLimitText);
  }

  get SupplementaryHeader() {
    return $(SELECTORS.SupplementaryText);
  }

  get SupplementaryLimit() {
    return $(SELECTORS.SupplementaryLimitText);
  }

  get MaternityLink() {
    return $(SELECTORS.Maternity);
  }

  get MaternityText() {
    return $(SELECTORS.MaternityHeader);
  }

  get AntenatalText() {
    return $(SELECTORS.Antenatal);
  }

  get LumpSumText() {
    return $(SELECTORS.LumpSum);
  }

  get WellnessLink() {
    return $(SELECTORS.Wellness);
  }

  get WellnessText() {
    return $(SELECTORS.WellnessHeader);
  }

  get MaxLimitText() {
    return $(SELECTORS.MaxLimit);
  }

  // get WellnessText(){
  //   return $(SELECTORS.)
  // }
}

export default new ProfilePage();
