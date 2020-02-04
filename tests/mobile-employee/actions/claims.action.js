import {
  _patientDetails,
  _reviewClaim,
  _termsConditions,
  _viewSubmittedClaims,
  _clickPendingClaims,
  _reimbursedAmount,
  _checkLoadedImageOnPendingClaims,
  _getSettlementDate,
  _receiptImage,
  _outpatientClaimLabel,
  _approvedClaims,
  _checkLoadedImageOnApprovedClaims,
  _backButton,
  _startFromIntial,
  _rejectedClaims,
  _wellnessClaimDetails,
  _uniqueClaimNumberIsDisplay,
  _claimSubmittedIsDisplay,
  _patientDetailsDep,
  _addDocuments,
  // _addDocumentsWithFiveImg,
  _anotherInsure,
  // _claimsLandingPage,
  _addDocumentsWithFiveImg,
  _clickNewClaim,
  _insurerOtherAmountAmount,
  _dotReceiptAmount,
  _equalClaimAmount,
  _greaterReceiptAmount,
  _greaterClaimAmount,
  _verifyReceiptError,
  _verifyInvalidClaimsError,
  _enterValidClaimDetails,
  _enterClaimDetails,
  _verifyClaimStatusIsPending,
  _verifyPendingConsultantType,
  _verifyPendingSubmittedDate,
  _verifyPendingReceiptAmount,
  _verifyClaimStatusIsApproved,
  _verifyApprovedConsultantType,
  _verifyApprovedSubmittedDate,
  _verifyApprovedReceiptAmount,
  _verifyClaimStatusIsRejected,
  _verifyRejectedConsultantType,
  _verifyRejectedSubmittedDate,
  _verifyRejectedReceiptAmount,
  _approvedClaimsGM,
  _makeClaimWithInsurer,
  _clickOnMakeAnotherClaim,
  _clickAddDocumentsButton,
  _closeIconOnTermsCondPage,
  _clickReviewClaimButton,
  _clickReviewClaim,
  _claimSubmittedPageIsDisplay
} from './internal/_claims';
import {
  details,
  detailsRefer,
  receiptAmount,
  insurerAmount,
  receiptDotAmount,
  greaterReceiptAmount,
  greaterClaimAmount,
  equalClaimAmount,
  image,
  dependent,
  isReimbursedAmountVisible,
  viewSubmittedClaim,
  gmpPendingClaim,
  pendingClaimLoadedImage,
  submitClaimButton,
  detailsDentalCare,
  receiptImage,
  verifyImageLoadedCheck,
  approvedClaimLabel,
  settlementDate,
  approvedClaimSC,
  backButton,
  startInitialPendingText,
  rejectedClaimForVaccination,
  rejectedClaimSC,
  rejectedClaimLabel,
  verifyRejectedImageLoadedCheck,
  rejectedClaimGMP,
  uniqueClaimNumber,
  submittedClaim,
  // anotherInsureCheckbox,
  // claim_amount,
  // contacts,
  // approvedWellnessClaimDependant,
  // claimLandingPage,
  clickNewClaimIcon,
  insurer_Amount,
  invalidReceiptError,
  invalidClaimsError,
  verifyPendingStatus,
  pendingConsultantType,
  pendingSubmittedDate,
  pendingReceiptAmount,
  verifyApprovedStatus,
  approvedConsultantType,
  approvedSubmittedDate,
  approvedReceiptAmount,
  rejectedConsultantType,
  rejectedSubmittedDate,
  rejectedReceiptAmount,
  approvedClaimGM,
  receiptAmountiOS,
  closeIconTermsCondPage
} from '../../data/claims.data';
import { screen } from '../helpers/api';
import navi from '../helpers/navi';

export function clickNewClaim() {
  _clickNewClaim(clickNewClaimIcon);
}

export function makeClaim() {
  const { type, diagnosis } = details;

  navi('Patient Details', () => _patientDetails(dependent));
  navi('Claim Details', () =>
    _enterClaimDetails(type, diagnosis, receiptAmount)
  );
  navi('Add Documents', () => _addDocumentsWithFiveImg(image, 3, 2));
  _reviewClaim(submitClaimButton);
  _termsConditions();
  browser.pause(8000);
  browser.pause(4000);
  return screen('Claim submitted');
}

export function makeClaimWithInsurer() {
  const { type, diagnosis } = details;
  navi('Patient Details', () => _patientDetails(dependent));
  navi('Claim Details', () =>
    _makeClaimWithInsurer(
      type,
      diagnosis,
      receiptAmount,
      receiptAmountiOS,
      insurerAmount
    )
  );
  navi('Add Documents', () => _addDocumentsWithFiveImg(image, 1));

  // click on back button to go to previous page
  _backButton(backButton);
  _clickReviewClaimButton();

  browser.pause(1000);
  _reviewClaim(submitClaimButton);

  // click on close button on terms and condition page
  browser.pause(1000);
  _closeIconOnTermsCondPage(closeIconTermsCondPage);

  browser.pause(2000);
  _clickReviewClaim(submitClaimButton);

  _termsConditions();
  browser.pause(15000);

  return screen('Claim submitted');
}

export function clickOnMakeAnotherClaim() {
  _clickOnMakeAnotherClaim();
  return screen('Patient Details');
}

//-------------------------------------------------

export function clickAddDocumentsButton() {
  _clickAddDocumentsButton();
}

export function enterValidClaimDetails() {
  const { type, diagnosis } = details;
  navi('Patient Details', () => _patientDetails(dependent));
  navi('Claim Details', () => _enterValidClaimDetails(type, diagnosis));
}

export function makeClaimWithDotReceiptAmount() {
  navi('Claim Details', () => _dotReceiptAmount(receiptDotAmount));
}

export function makeClaimWithGreaterReceiptAmount() {
  navi('Claim Details', () => _greaterReceiptAmount(greaterReceiptAmount));
}

export function makeClaimWithGreaterClaimAmount() {
  navi('Claim Details', () =>
    _greaterClaimAmount(receiptAmount, greaterClaimAmount)
  );
}

export function makeClaimWithequalClaimAmount() {
  navi('Claim Details', () =>
    _equalClaimAmount(receiptAmount, equalClaimAmount)
  );
}

export function verifyReceiptError() {
  return _verifyReceiptError(invalidReceiptError);
}

export function verifyInvalidClaimsError() {
  return _verifyInvalidClaimsError(invalidClaimsError);
}

//------------------------------------
export function makeDepWellnessClaim() {
  const { type, diagnosis } = detailsDentalCare;

  navi('Patient Details', () => _patientDetailsDep(dependent, true, false));

  navi('Claim Details', () =>
    _wellnessClaimDetails(type, diagnosis, receiptAmount)
  );
  //navi('Add Documents', () => _addDocuments(image));
  browser.pause(20000);

  navi('Review Claim', _reviewClaim(submitClaimButton));
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}

export function makeClaimWithRef() {
  const { type, diagnosis } = detailsRefer;
  navi('Patient Details', () => _patientDetails(dependent));
  navi('Claim Details', () =>
    _anotherInsure(type, diagnosis, receiptAmount, insurerAmount)
  );
  navi('Add Documents', () => _addDocumentsWithFiveImg(image, 5, true));
  //browser.pause(20000);
  navi('Review Claim', _reviewClaim(submitClaimButton));
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}

export function makeClaimwithAnotherInsure() {
  const { type, diagnosis } = details;
  navi('Patient Details', () => _patientDetails(dependent));
  navi('Claim Details', () =>
    _anotherInsure(type, diagnosis, receiptAmount, insurerAmount)
  );

  navi('Add Documents', () => _addDocuments(image, false));

  navi('Review Claim', _reviewClaim(submitClaimButton));
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}

export function viewSubmittedClaims() {
  _viewSubmittedClaims(viewSubmittedClaim);
}
export function clickPendingClaims() {
  _clickPendingClaims(gmpPendingClaim);
}

export function reimbursedAmount() {
  return _reimbursedAmount(isReimbursedAmountVisible);
}

export function getSettlementDate() {
  return _getSettlementDate(settlementDate);
}

export function loadedImage() {
  return _checkLoadedImageOnPendingClaims(pendingClaimLoadedImage);
}

export function receiptImages() {
  return _receiptImage(receiptImage);
}

export function verifyLoadedImageCheck() {
  return _checkLoadedImageOnApprovedClaims(verifyImageLoadedCheck);
}

//------Pending
export function verifyClaimStatusIsPending() {
  return _verifyClaimStatusIsPending(verifyPendingStatus);
}

export function verifyPendingConsultantType() {
  return _verifyPendingConsultantType(pendingConsultantType);
}

export function verifyPendingSubmittedDate() {
  return _verifyPendingSubmittedDate(pendingSubmittedDate);
}

export function verifyPendingReceiptAmount() {
  return _verifyPendingReceiptAmount(pendingReceiptAmount);
}
//---- approved

export function verifyClaimStatusIsApproved() {
  return _verifyClaimStatusIsApproved(verifyApprovedStatus);
}

export function verifyApprovedConsultantType() {
  return _verifyApprovedConsultantType(approvedConsultantType);
}

export function verifyApprovedSubmittedDate() {
  return _verifyApprovedSubmittedDate(approvedSubmittedDate);
}

export function verifyApprovedReceiptAmount() {
  return _verifyApprovedReceiptAmount(approvedReceiptAmount);
}

//----Rejected

export function verifyClaimStatusIsRejected() {
  return _verifyClaimStatusIsRejected(verifyApprovedStatus);
}

export function verifyRejectedConsultantType() {
  return _verifyRejectedConsultantType(rejectedConsultantType);
}

export function verifyRejectedSubmittedDate() {
  return _verifyRejectedSubmittedDate(rejectedSubmittedDate);
}

export function verifyRejectedReceiptAmount() {
  return _verifyRejectedReceiptAmount(rejectedReceiptAmount);
}

//---------------
export function approvedClaimLables() {
  return _outpatientClaimLabel(approvedClaimLabel);
}

export function checkAndClickApprovedClaimsForSpecialistConsultation() {
  return _approvedClaims(approvedClaimSC);
}

export function clickApprovedClaimsForGeneralMedicalPractitioner() {
  return _approvedClaimsGM(approvedClaimGM);
}

export function clickBackButton() {
  return _backButton(backButton);
}

export function startFromIntial() {
  return _startFromIntial(startInitialPendingText);
}

export function checkAndClickRejectedClaimsForVaccination() {
  return _rejectedClaims(rejectedClaimForVaccination);
}

export function checkAndClickRejectedClaimsForSpecialistConsultation() {
  return _rejectedClaims(rejectedClaimSC);
}

export function rejectedClaimLables() {
  return _outpatientClaimLabel(rejectedClaimLabel);
}

export function verifyRejectedLoadedImageCheck() {
  return _checkLoadedImageOnApprovedClaims(verifyRejectedImageLoadedCheck);
}
export function checkAndClickRejectedClaimsForGeneralMedicalPractitioner() {
  return _rejectedClaims(rejectedClaimGMP);
}
export function claimSubmittedIsDisplay() {
  return _claimSubmittedIsDisplay(submittedClaim);
}

export function claimSubmittedPageIsDisplay() {
  return _claimSubmittedPageIsDisplay(submittedClaim);
}

export function uniqueClaimNumberIsDisplay() {
  return _uniqueClaimNumberIsDisplay(uniqueClaimNumber);
}

export function insurerOtherAmountAmount() {
  return _insurerOtherAmountAmount(insurer_Amount);
}
