import {
  isNavigationBarVisible,
  navigateToClaimsScreen
} from '../actions/navigator.action';
import * as claims from '../actions/claims.action';
import { loginAs } from '../actions/login.action';
import { validCredentials } from '../../data/login.data';

fdescribe('User should be able to:', () => {
  beforeAll(() => {
    loginAs(validCredentials);
    driver.pause(2000);
    isNavigationBarVisible();
    driver.pause(2000);
    navigateToClaimsScreen();
    driver.pause(2000);
  });

  fit('submit an outpatient claim for without a referral letter', () => {
    claims.clickNewClaim();
    expect(claims.makeClaim()).toBeTruthy();
    expect(claims.claimSubmittedIsDisplay()).toBeTruthy();
    driver.pause(2000);
    claims.viewSubmittedClaims();
  });

  // skipped, with referral letter not in scope
  it('submit an outpatient claim for with a referral letter', () => {
    claims.clickNewClaim();
    expect(claims.makeClaimWithRef()).toBeTruthy();
    expect(claims.claimSubmittedIsDisplay()).toBeTruthy();
    expect(claims.uniqueClaimNumberIsDisplay()).toBeTruthy();
    driver.pause(2000);
    claims.viewSubmittedClaims();
  });

  // will be enabled once a wellness claim has been added for a dependant
  it('submit a wellness claim as a dependant', () => {
    claims.clickNewClaim();
    expect(claims.makeDepWellnessClaim()).toBeTruthy();
    expect(claims.claimSubmittedIsDisplay()).toBeTruthy();
    expect(claims.uniqueClaimNumberIsDisplay()).toBeTruthy();
    driver.pause(2000);
    claims.viewSubmittedClaims();
  });

  fit('view submitted claims details (pending outpatient claim for employee)', () => {
    expect(claims.loadedImage()).toBeTruthy();
    console.log('image visible');
    claims.clickPendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy();
    expect(claims.getSettlementDate()).toBeFalsy();
    console.log('pending claims verified');
    claims.clickBackButton();
  });

  // skipped test, pending data setup
  it('view submitted claims details (approved outpatient claim for employee )', () => {
    claims.startFromIntial();
    expect(claims.verifyClaimStatusIsApproved()).toEqual('Approved & Rejected');
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
    claims.clickApprovedClaimsForGeneralMedicalPractitioner();
    expect(claims.approvedClaimLables()).toEqual('Outpatient');
    expect(claims.reimbursedAmount()).toBeTruthy();
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy();
    claims.clickBackButton();
  });

  // skipped, no available rejected claim
  it('view submitted claims details (rejected wellness claim for employee)', () => {
    claims.startFromIntial();
    claims.checkAndClickRejectedClaimsForSpecialistConsultation();
    expect(
      claims.checkAndClickRejectedClaimsForGeneralMedicalPractitioner()
    ).toBeTruthy();
    expect(claims.rejectedClaimLables()).toEqual('Wellness claim');
    expect(claims.reimbursedAmount()).toBeFalsy();
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy();
  });

  fit('verify claims history (pending outpatient claim for employee without referral letter)', () => {
    expect(claims.verifyClaimStatusIsPending()).toBeTruthy();
    expect(claims.loadedImage()).toBeTruthy();
    console.log('pending clock image visible');
    expect(claims.verifyPendingSubmittedDate()).toBeTruthy();
    expect(claims.verifyPendingConsultantType()).toBeTruthy();
    expect(claims.verifyPendingReceiptAmount()).toBeTruthy();
  });

  fit('verify claims history (approved outpatient claim for employee with referral letter)', () => {
    expect(claims.verifyClaimStatusIsApproved()).toEqual('Approved & Rejected');
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
    console.log('approved clock image visible');
    driver.pause(2000);
    expect(claims.verifyApprovedSubmittedDate()).toBeTruthy();
    expect(claims.verifyApprovedConsultantType()).toBeTruthy();
    expect(claims.verifyApprovedReceiptAmount()).toBeTruthy();
  });

  // skipped, no available rejected claim
  it('verify claims history (rejected wellness claim for employee)', () => {
    expect(claims.verifyClaimStatusIsRejected()).toEqual('Approved & Rejected');
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
    console.log('approved clock image visible');
    driver.pause(2000);
    expect(claims.verifyRejectedSubmittedDate()).toBeTruthy();
    expect(claims.verifyRejectedConsultantType()).toBeTruthy();
    expect(claims.verifyRejectedReceiptAmount()).toBeTruthy();
  });

  fit('submit a claim (with insurer)', () => {
    claims.clickNewClaim();
    expect(claims.makeClaimWithInsurer()).toBeTruthy();
    expect(claims.claimSubmittedPageIsDisplay()).toBeTruthy();
    driver.pause(2000);
  });

  fit('make another claim and navigates to pateint details page', () => {
    expect(claims.clickOnMakeAnotherClaim()).toBeTruthy();
  });

  afterAll(() => {
    driver.reset();
  });
});
