import {
  select,
  date,
  kbd,
  photo,
  pdf,
  tap,
  platform as getPlatform,
  checkIfDisplayedWithScrollDown,
  checkIfDisplayedWithScrollUp,
  swipeOnElementToLeft
} from '../../helpers/api';
import txt, { txtTo } from '../../helpers/text';
import { CLAIMS as SELECTOR } from '../../selectors';
import { wait, minWait } from '../../helpers/api/wait';

export function _clickNewClaim(clickNewClaim) {
  const platform = getPlatform();
  driver.pause(5000);
  $(clickNewClaim[platform]).click();
  driver.pause(2000);
}

export function _patientDetails(
  dependent,
  isPN = false,
  isCN = false,
  contact
) {
  if (isPN) {
    const selectPName = select(
      SELECTOR.selectPatientNameWithWellness,
      txt('Patient name')
    );

    selectPName(txtTo(dependent));
  }

  if (isCN) {
    $(SELECTOR.inputContactNumber).click();

    // TODO: implement for ios
    // $('~Contact number').clearValue();

    $(SELECTOR.inputContactNumber).setValue(contact);
    kbd('hide');
  }

  driver.pause(1000);

  $(SELECTOR.buttonAddClaimDetails).click();
}

export function _claimDetails(type, diagnosis, amount) {
  const selectCType = select(
    SELECTOR.selectConsultationType,
    txt('Consultation type')
  );
  const selectDia = select(SELECTOR.selectDiagnosis, txt('Diagnosis'));

  selectCType(txtTo(type));
  selectDia(txtTo(diagnosis));

  date('toggle', SELECTOR.dateConsultationDate);

  $(SELECTOR.inputReceiptAmount).click();
  $(SELECTOR.inputReceiptAmount).setValue(amount);
  kbd('hide');
  checkIfDisplayedWithScrollDown($(SELECTOR.buttonAddDocuments), 7, 0);
  $(SELECTOR.buttonAddDocuments).click();
}

export function _enterClaimDetails(type, diagnosis, receiptAmount) {
  const selectCType = select(
    SELECTOR.selectConsultationType,
    txt('Consultation type')
  );
  const selectDia = select(SELECTOR.selectDiagnosis, txt('Diagnosis'));

  selectCType(txtTo(type));
  selectDia(txtTo(diagnosis));

  date('toggle', SELECTOR.dateConsultationDate);

  $(SELECTOR.inputReceiptAmount).click();
  $(SELECTOR.inputReceiptAmount).setValue(receiptAmount);
  kbd('hide');

  checkIfDisplayedWithScrollDown($(SELECTOR.buttonAddDocuments), 7, 0);
  $(SELECTOR.buttonAddDocuments).click();
}

export function _makeClaimWithInsurer(
  type,
  diagnosis,
  receiptAmount,
  receiptAmountiOS,
  insurerAmount
) {
  const selectCType = select(
    SELECTOR.selectConsultationType,
    txt('Consultation type')
  );
  const selectDia = select(SELECTOR.selectDiagnosis, txt('Diagnosis'));

  selectCType(txtTo(type));
  selectDia(txtTo(diagnosis));

  date('toggle', SELECTOR.dateConsultationDate);

  const platform = getPlatform();

  if (platform === 'ios') {
    $(SELECTOR.inputReceiptAmount).click();
    $(SELECTOR.inputReceiptAmount).setValue(receiptAmountiOS);
    kbd('hide');
  } else if (platform === 'android') {
    $(SELECTOR.inputReceiptAmount).click();
    $(SELECTOR.inputReceiptAmount).setValue(receiptAmount);
    kbd('hide');
  }

  $(SELECTOR.insurerCheckbox).click();
  $(SELECTOR.insurerAmount).setValue(insurerAmount);
  kbd('hide');

  checkIfDisplayedWithScrollDown($(SELECTOR.buttonAddDocuments), 7, 0);
  $(SELECTOR.buttonAddDocuments).click();
}

export function _clickAddDocumentsButton() {
  $(SELECTOR.buttonAddDocuments).click();
}

export function _clickReviewClaimButton() {
  $(SELECTOR.buttonReviewClaim).click();
  console.log('review claim button is clicked');
}

export function _closeIconOnTermsCondPage(closeIcon) {
  const platform = getPlatform();

  try {
    wait(closeIcon[platform]);
    $(closeIcon[platform]).click();
  } catch (error) {
    console.log('Error is ', error);
  }
}

export function _anotherInsure(type, diagnosis, receiptAmount, insurerAmount) {
  const selectCType = select(
    SELECTOR.selectConsultationType,
    txt('Consultation type')
  );
  const selectDia = select(SELECTOR.selectDiagnosis, txt('Diagnosis'));

  selectCType(txtTo(type));
  selectDia(txtTo(diagnosis));

  date('toggle', SELECTOR.dateConsultationDate);

  $(SELECTOR.inputReceiptAmount).click();
  $(SELECTOR.inputReceiptAmount).setValue(receiptAmount);
  kbd('hide');

  $(SELECTOR.insurerCheckbox).click();
  $(SELECTOR.insurerAmount).setValue(insurerAmount);
  kbd('hide');

  checkIfDisplayedWithScrollDown($(SELECTOR.buttonAddDocuments), 7, 0);
  $(SELECTOR.buttonAddDocuments).click();
}

//----------------------------------------------------------------------------

export function _clickOnMakeAnotherClaim() {
  $(SELECTOR.makeAnotherClaim).click();
  driver.pause(1000);
}

export function _enterValidClaimDetails(type, diagnosis) {
  const selectCType = select(
    SELECTOR.selectConsultationType,
    txt('Consultation type')
  );
  const selectDia = select(SELECTOR.selectDiagnosis, txt('Diagnosis'));

  selectCType(txtTo(type));
  selectDia(txtTo(diagnosis));

  date('toggle', SELECTOR.dateConsultationDate);
}

export function _dotReceiptAmount(receiptAmount) {
  $(SELECTOR.inputReceiptAmount).click();
  $(SELECTOR.inputReceiptAmount).setValue(receiptAmount);
  kbd('hide');

  checkIfDisplayedWithScrollDown($(SELECTOR.buttonAddDocuments), 7, 0);
  $(SELECTOR.buttonAddDocuments).click();
}

export function _greaterReceiptAmount(receiptAmount) {
  $(SELECTOR.inputReceiptAmount).click();
  $(SELECTOR.inputReceiptAmount).setValue(receiptAmount);
  driver.pause(2000);
  kbd('hide');

  checkIfDisplayedWithScrollDown($(SELECTOR.buttonAddDocuments), 7, 0);
  $(SELECTOR.buttonAddDocuments).click();
}

export function _greaterClaimAmount(receiptAmount, insurerAmount) {
  $(SELECTOR.inputReceiptAmount).click();
  $(SELECTOR.inputReceiptAmount).setValue(receiptAmount);
  driver.pause(1000);
  kbd('hide');

  $(SELECTOR.insurerCheckbox).click();
  $(SELECTOR.insurerAmount).setValue(insurerAmount);
  driver.pause(1000);
  kbd('hide');

  checkIfDisplayedWithScrollDown($(SELECTOR.buttonAddDocuments), 7, 0);
  $(SELECTOR.buttonAddDocuments).click();
}

export function _equalClaimAmount(receiptAmount, insurerAmount) {
  $(SELECTOR.inputReceiptAmount).click();
  $(SELECTOR.inputReceiptAmount).setValue(receiptAmount);
  driver.pause(1000);
  kbd('hide');

  $(SELECTOR.insurerCheckbox).click();
  $(SELECTOR.insurerAmount).setValue(insurerAmount);
  driver.pause(1000);
  kbd('hide');

  checkIfDisplayedWithScrollDown($(SELECTOR.buttonAddDocuments), 7, 0);
  $(SELECTOR.buttonAddDocuments).click();
}

//-------------------------------------------------------------------------------------

export function _wellnessClaimDetails(type, diagnosis, amount) {
  const selectCType = select(
    SELECTOR.selectConsultationType,
    txt('Consultation type')
  );
  const selectDia = select(SELECTOR.selectDiagnosis, txt('Diagnosis'));

  selectCType(txtTo(type));
  selectDia(txtTo(diagnosis));

  date('toggle', SELECTOR.dateConsultationDate);

  $(SELECTOR.claimsAmount).click();
  $(SELECTOR.claimsAmount).setValue(amount);
  kbd('hide');
  checkIfDisplayedWithScrollDown($(SELECTOR.buttonAddDocuments), 7, 0);
  $(SELECTOR.buttonAddDocuments).click();
}

export function _addDocuments(image, isRefer = false) {
  const platform = getPlatform();

  if (platform === 'ios') {
    $(SELECTOR.photoAddDocumentReceipts).click();
    driver.pause(2000);
    photo('select', {
      permit: platform === 'ios',
      photo: image[platform]
    });
  } else if (platform === 'android') {
    $(
      '//android.view.ViewGroup[@content-desc="Add document for Receipts"]'
    ).click();
    //    NOTE: tap will do faster than we expected, so make it delays
    driver.pause(2000);
    //  tap(335, 867);
    photo('select', {
      permit: platform === 'android',
      photo: image[platform]
    });
  }

  // cs.photoAddDocumentReceipts.click();
  // photo('select', {
  //   permit: platform === 'ios',
  //   photo: image[platform]
  // });

  if (isRefer) {
    const refSelector =
      platform === 'ios'
        ? '(//XCUIElementTypeOther[@name="Add document for Referral letter"])[6]'
        : SELECTOR.photoAddDocumentForReferralLetter;

    $(refSelector).click();
    photo('select', {
      permit: false,
      photo: image[platform]
    });
    //checkIfDisplayedWithScrollDown($(SELECTOR.buttonReviewClaim), 100, 0);
  }
  checkIfDisplayedWithScrollDown($(SELECTOR.buttonReviewClaim), 100, 0);
  $(SELECTOR.buttonReviewClaim).click();
}

export function _patientDetailsDep(
  sc_dependent,
  isPN = false,
  isCN = false,
  contact
) {
  if (isPN) {
    const selectPName = select(
      SELECTOR.selectPatientName,
      txt('Select Patient Name')
    );

    selectPName(txtTo(sc_dependent));
  }

  if (isCN) {
    $(SELECTOR.inputContactNumber).click();
    $(SELECTOR.inputContactNumber).setValue(contact);
    kbd('hide');
  }

  driver.pause(1000);

  $(SELECTOR.buttonAddClaimDetails).click();
}

export function _reviewClaim(submitClaimButton) {
  // driver.pause(1000);
  const platform = getPlatform();
  // NOTE: hack; to prevent previous event (click)
  tap(1, 1);
  checkIfDisplayedWithScrollDown($(submitClaimButton[platform]), 100, 0);
  $(submitClaimButton[platform]).click();
  console.log('submit claim button clicked');
}

export function _clickReviewClaim(submitClaimButton) {
  // driver.pause(1000);
  const platform = getPlatform();
  $(submitClaimButton[platform]).click();
  console.log('submit claim button clicked');
}

export function _termsConditions() {
  $(SELECTOR.buttonAcceptTermsConditions).click();
  console.log('terms and condition button clicked');
}

export function _viewSubmittedClaims(viewSubmittedClaim) {
  const platform = getPlatform();
  driver.pause(4000);
  minWait(viewSubmittedClaim[platform]);
  $(viewSubmittedClaim[platform]).click();
  console.log('view submitted claims button clicked');
}

export function _clickPendingClaims(gmpPendingClaim) {
  const platform = getPlatform();
  driver.pause(4000);
  checkIfDisplayedWithScrollDown($(gmpPendingClaim[platform]), 100, 0);
  $(gmpPendingClaim[platform]).click();
  console.log('pending claim clicked');
}

export function _reimbursedAmount(isReimbursedAmountVisible) {
  const platform = getPlatform();
  let isVisible;

  try {
    isVisible = minWait(isReimbursedAmountVisible[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _checkLoadedImageOnPendingClaims(pendingClaimLoadedImage) {
  const platform = getPlatform();
  let isVisible;
  driver.pause(1000);
  try {
    isVisible = wait(pendingClaimLoadedImage[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _getSettlementDate(settlementDate) {
  const platform = getPlatform();
  let isVisible;
  try {
    if (platform === 'ios') {
      isVisible = minWait(settlementDate.ios);
    } else if (platform === 'android') {
      isVisible = minWait(settlementDate.android);
    }
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _receiptImage(receiptImage) {
  const platform = getPlatform();
  let isVisible;

  try {
    checkIfDisplayedWithScrollDown($(receiptImage[platform]), 7, 0);
    isVisible = minWait(receiptImage[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _referralLetter(referralLetter) {
  const platform = getPlatform();
  let isVisible;

  try {
    checkIfDisplayedWithScrollDown($(referralLetter[platform]), 7, 0);
    isVisible = wait(referralLetter[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _outpatientClaimLabel(outpatientClaimLabel) {
  const platform = getPlatform();
  var data;

  try {
    data = $(outpatientClaimLabel[platform]).getText();
    console.log('get the outpatient');
  } catch (error) {
    data = 'Not Found';
  }
  return data;
}

//--------------
export function _verifyClaimStatusIsPending(verifyClaimStatusIsPending) {
  const platform = getPlatform();
  let isVisible;

  if (platform === 'ios') {
    driver.pause(10000);
  }

  try {
    driver.pause(1000);
    isVisible = minWait(verifyClaimStatusIsPending[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _verifyPendingConsultantType(verifyPendingConsultantType) {
  const platform = getPlatform();
  let isVisible;

  try {
    isVisible = minWait(verifyPendingConsultantType[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _verifyPendingSubmittedDate(verifyPendingSubmittedDate) {
  const platform = getPlatform();
  let isVisible;

  try {
    checkIfDisplayedWithScrollDown(
      $(verifyPendingSubmittedDate[platform]),
      7,
      0
    );
    isVisible = minWait(verifyPendingSubmittedDate[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _verifyPendingReceiptAmount(verifyPendingReceiptAmount) {
  const platform = getPlatform();
  let isVisible;

  try {
    driver.pause(1000);
    isVisible = minWait(verifyPendingReceiptAmount[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

//-----------approved

export function _verifyClaimStatusIsApproved(verifyClaimStatusIsApproved) {
  const platform = getPlatform();
  var data;

  try {
    driver.pause(4000);
    checkIfDisplayedWithScrollDown(
      $(verifyClaimStatusIsApproved[platform]),
      100,
      0
    );
    data = $(verifyClaimStatusIsApproved[platform]).getText();
  } catch (error) {
    data = 'Not Found';
  }
  return data;
}

export function _verifyApprovedConsultantType(approvedConsultantType) {
  const platform = getPlatform();
  let isVisible;

  try {
    isVisible = minWait(approvedConsultantType[platform]);
    console.log('verify Approved Consultant Type is visible');
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _verifyApprovedSubmittedDate(approvedSubmittedDate) {
  const platform = getPlatform();
  let isVisible;

  try {
    driver.pause(3000);
    isVisible = minWait(approvedSubmittedDate[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _verifyApprovedReceiptAmount(approvedReceiptAmount) {
  const platform = getPlatform();
  let isVisible;

  try {
    isVisible = minWait(approvedReceiptAmount[platform]);
    console.log('receipt amount for approved claim is visible');
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

//----- Rejected

export function _verifyClaimStatusIsRejected(verifyClaimStatusIsRejected) {
  const platform = getPlatform();
  var data;

  try {
    driver.pause(4000);
    checkIfDisplayedWithScrollDown(
      $(verifyClaimStatusIsRejected[platform]),
      100,
      0
    );
    data = $(verifyClaimStatusIsRejected[platform]).getText();
  } catch (error) {
    data = 'Not Found';
  }
  return data;
}

export function _verifyRejectedConsultantType(rejectedConsultantType) {
  const platform = getPlatform();
  let isVisible;

  try {
    isVisible = minWait(rejectedConsultantType[platform]);
    console.log('verify Rejected Consultant Type is visible');
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _verifyRejectedSubmittedDate(rejectedSubmittedDate) {
  const platform = getPlatform();
  let isVisible;

  try {
    driver.pause(3000);
    isVisible = minWait(rejectedSubmittedDate[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _verifyRejectedReceiptAmount(rejectedReceiptAmount) {
  const platform = getPlatform();
  let isVisible;

  try {
    isVisible = minWait(rejectedReceiptAmount[platform]);
    console.log('receipt amount for rejected claim is visible');
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

//---------
export function _approvedClaims(approvedClaim) {
  const platform = getPlatform();
  let isVisible;

  try {
    checkIfDisplayedWithScrollDown($(approvedClaim[platform]), 100, 0);
    isVisible = wait(approvedClaim[platform]);
    if (isVisible) {
      $(approvedClaim[platform]).click();
      console.log('clicked on approved claims');
    }
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _approvedClaimsGM(approvedClaim) {
  const platform = getPlatform();
  let isVisible;

  try {
    checkIfDisplayedWithScrollDown($(approvedClaim[platform]), 100, 0);
    isVisible = wait(approvedClaim[platform]);
    if (isVisible) {
      $(approvedClaim[platform]).click();
      console.log('clicked on approved claims for GMP');
    }
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _checkLoadedImageOnApprovedClaims(verifyImageLoadedCheck) {
  const platform = getPlatform();
  let isVisible;
  driver.pause(4000);
  try {
    checkIfDisplayedWithScrollDown($(verifyImageLoadedCheck[platform]), 100, 0);
    isVisible = wait(verifyImageLoadedCheck[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _backButton(backButton) {
  const platform = getPlatform();

  try {
    driver.pause(1000);
    wait(backButton[platform]);
    $(backButton[platform]).click();
    driver.pause(1000);
  } catch (error) {
    console.log('Error is ', error);
  }
}

export function _startFromIntial(startInitialPendingText) {
  const platform = getPlatform();

  try {
    checkIfDisplayedWithScrollUp($(startInitialPendingText[platform]), 100, 0);
    wait(startInitialPendingText[platform]);
    console.log('start from initial');
  } catch (error) {
    console.log('Error is ', error);
  }
}

export function _rejectedClaims(rejectedClaim) {
  const platform = getPlatform();
  let isVisible;

  try {
    checkIfDisplayedWithScrollDown($(rejectedClaim[platform]), 100, 0);
    isVisible = wait(rejectedClaim[platform]);
    if (isVisible) {
      $(rejectedClaim[platform]).click();
    }
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _uniqueClaimNumberIsDisplay(uniqueClaimNumber) {
  const platform = getPlatform();
  let isVisible;
  driver.pause(4000);
  try {
    isVisible = wait(uniqueClaimNumber[platform]);
    console.log('unique claim number visibled');
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _claimSubmittedIsDisplay(submittedClaim) {
  const platform = getPlatform();
  let isVisible;
  driver.pause(4000);
  try {
    driver.pause(4000);
    isVisible = wait(submittedClaim[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _claimSubmittedPageIsDisplay(submittedClaim) {
  const platform = getPlatform();
  let isVisible;
  driver.pause(4000);
  try {
    driver.pause(20000);
    isVisible = wait(submittedClaim[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _verifyReceiptError(receiptError) {
  const platform = getPlatform();
  let isVisible;
  driver.pause(4000);
  try {
    isVisible = wait(receiptError[platform]);
    console.log('Data1', isVisible);
  } catch (error) {
    console.log('Data2', isVisible);
    isVisible = false;
  }
  return isVisible;
}

export function _verifyInvalidClaimsError(ClaimsError) {
  const platform = getPlatform();
  let isVisible;
  driver.pause(4000);
  try {
    isVisible = wait(ClaimsError[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _makeNewClaims(makeNewClaim) {
  const platform = getPlatform();
  driver.pause(3000);
  // if (platform === 'ios') {
  $(makeNewClaim[platform]).click();
}

export function _claimsLandingPage(claimsLandingPage) {
  const platform = getPlatform();
  var data;
  try {
    data = $(claimsLandingPage[platform]).getText();
  } catch (error) {
    data = 'Not Found';
  }
  return data;
}

export function _addDocumentsWithFiveImg(
  image,
  numberOfImages,
  numberOfPdf,
  isRefer = false
) {
  const platform = getPlatform();
  for (var i = 1; i <= numberOfImages; i++) {
    if (platform === 'ios') {
      $(SELECTOR.photoAddDocumentReceipts).click();
      // driver.pause(1000);
      photo('select', {
        permit: platform === 'ios',
        photo: image[platform]
      });
    } else if (platform === 'android') {
      $(
        '//android.view.ViewGroup[@content-desc="Add document for Receipts"]'
      ).click();
      //    NOTE: tap will do faster than we expected, so make it delays
      driver.pause(2000);
      //  tap(335, 867);
      photo('select', {
        permit: platform === 'android',
        photo: image[platform]
      });
    }

    if (i < 2) {
      swipeOnElementToLeft($(SELECTOR.photoAddDocumentReceipts));
    } else if (i < 3) {
      swipeOnElementToLeft($(SELECTOR.photoAddDocumentReceipts));
      swipeOnElementToLeft($(SELECTOR.photoAddDocumentReceipts));
    }
  }
  swipeOnElementToLeft($(SELECTOR.photoAddDocumentReceipts));

  for (var j = 1; j <= numberOfPdf; j++) {
    driver.pause(1000);
    swipeOnElementToLeft($(SELECTOR.photoAddDocumentReceipts));
    if (platform === 'ios') {
      swipeOnElementToLeft($(SELECTOR.photoAddDocumentReceipts));
      swipeOnElementToLeft($(SELECTOR.photoAddDocumentReceipts));
      $(SELECTOR.photoAddDocumentReceipts).click();
      driver.pause(1000);
      pdf('select', {
        permit: platform === 'ios',
        photo: image[platform]
      });
    } else if (platform === 'android') {
      driver.pause(2000);
      $(
        '//android.view.ViewGroup[@content-desc="Add document for Receipts"]'
      ).click();
      //    NOTE: tap will do faster than we expected, so make it delays
      driver.pause(2000);
      //  tap(335, 867);
      pdf('select', {
        permit: platform === 'android',
        photo: image[platform]
      });
    }
  }

  // cs.photoAddDocumentReceipts.click();
  // photo('select', {
  //   permit: platform === 'ios',
  //   photo: image[platform]
  // });

  if (isRefer) {
    const refSelector =
      platform === 'ios'
        ? '(//XCUIElementTypeOther[@name="Add document for Referral letter"])[6]'
        : SELECTOR.photoAddDocumentForReferralLetter;

    $(refSelector).click();

    photo('select', {
      permit: false,
      photo: image[platform]
    });
    //checkIfDisplayedWithScrollDown($(SELECTOR.buttonReviewClaim), 100, 0);
  }
  checkIfDisplayedWithScrollDown($(SELECTOR.buttonReviewClaim), 100, 0);
  $(SELECTOR.buttonReviewClaim).click();
  console.log('review claim button clicked');
}

export function _insurerOtherAmountAmount(insurer_amount) {
  const platform = getPlatform();
  let isVisible;
  try {
    checkIfDisplayedWithScrollDown($(insurer_amount[platform]), 7, 0);
    isVisible = minWait(insurer_amount[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}
