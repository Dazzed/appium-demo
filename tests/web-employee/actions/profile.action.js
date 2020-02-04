import {
  isNavigationBarVisible,
  navigateToProfilePage
} from '../actions/navigator.action';

import ProfilePage from '../pageObjects/profile.page';

const path = require('path');
const getColors = require('get-image-colors');
var Jimp = require('jimp');

export function mePage() {
  isNavigationBarVisible();
  navigateToProfilePage();
  ProfilePage.waitForElementIsShown(ProfilePage.MePage);
  ProfilePage.MePage.click();
  return ProfilePage.MePage.isDisplayed();
}

export function eHealthCardVisibility() {
  ProfilePage.waitForElementIsShown(ProfilePage.EHealthScreen);
  return ProfilePage.EHealthScreen.isDisplayed();
}

export function benefits() {
  ProfilePage.waitForElementIsShown(ProfilePage.BenefitPage);
  ProfilePage.BenefitPage.click();
  ProfilePage.waitForElementIsShown(ProfilePage.BenefitScreen);
  return ProfilePage.BenefitScreen.isDisplayed();
}

export function details() {
  ProfilePage.waitForElementIsShown(ProfilePage.DetailsPage);
  ProfilePage.DetailsPage.click();
  ProfilePage.waitForElementIsShown(ProfilePage.DetailsScreen);
  return ProfilePage.DetailsScreen.isDisplayed();
}

export function UsefulDocuments() {
  ProfilePage.waitForElementIsShown(ProfilePage.UsefulDocumentsPage);
  ProfilePage.UsefulDocumentsPage.click();
  ProfilePage.waitForElementIsShown(ProfilePage.UsefulDocumentScreen);
  return ProfilePage.UsefulDocumentScreen.isDisplayed();
}

export function Helps() {
  ProfilePage.waitForElementIsShown(ProfilePage.HelpPage);
  ProfilePage.HelpPage.click();
  ProfilePage.waitForElementIsShown(ProfilePage.HelpScreen);
  return ProfilePage.HelpScreen.isDisplayed();
}

export function Settings() {
  ProfilePage.waitForElementIsShown(ProfilePage.SettingPage);
  ProfilePage.SettingPage.click();
  ProfilePage.waitForElementIsShown(ProfilePage.SettingScreen);
  return ProfilePage.SettingScreen.isDisplayed();
}

export function virtualCards() {
  ProfilePage.waitForElementIsShown(ProfilePage.EHealthCardPage);
  ProfilePage.EHealthCardPage.click();
  ProfilePage.waitForElementIsShown(ProfilePage.EHealthScreen);
  ProfilePage.EHealthScreen.click();
  ProfilePage.waitForElementIsShown(ProfilePage.virtualCardsName);
  expect(ProfilePage.virtualCardsName.isDisplayed()).toBeTruthy();
  expect(ProfilePage.virtualCardsMembership.isDisplayed()).toBeTruthy();
  expect(ProfilePage.virtualCardDate.isDisplayed()).toBeTruthy();
  return ProfilePage.virtualCardDate.isDisplayed();
}

export function Policy() {
  ProfilePage.waitForElementIsShown(ProfilePage.BenefitPage);
  ProfilePage.BenefitPage.click();
  ProfilePage.waitForElementIsShown(ProfilePage.PolicyDetailsText);
  expect(ProfilePage.PolicyNum.isDisplayed()).toBeTruthy();
  return ProfilePage.InsurerDetails.isDisplayed();
}

export function Insurer() {
  return ProfilePage.InsurerDetails.isDisplayed();
}

export function EffectivePeriod() {
  return ProfilePage.InsurerDetails.isDisplayed();
}

export function ViewFor() {
  ProfilePage.waitForElementIsShown(ProfilePage.SelectBenefit);
  return ProfilePage.SelectBenefit.isDisplayed();
}

export function tier() {
  ProfilePage.waitForElementIsShown(ProfilePage.SelectBenefit);
  ProfilePage.SelectBenefit.click();
  ProfilePage.waitForElementIsShown(ProfilePage.TierLink);
  ProfilePage.TierLink.click();
  return ProfilePage.SelectBenefit.isDisplayed();
}

export function outpatient() {
  ProfilePage.waitForElementIsShown(ProfilePage.OutpatientLink);
  ProfilePage.OutpatientLink.click();
  ProfilePage.waitForElementIsShown(ProfilePage.OutpatientHeader);
  expect(ProfilePage.OutpatientHeader.isDisplayed()).toBeTruthy();
  expect(ProfilePage.GeneralPractitioner.isDisplayed()).toBeTruthy();
  expect(ProfilePage.Specialist.isDisplayed()).toBeTruthy();
  expect(ProfilePage.Physiotherapy.isDisplayed()).toBeTruthy();
  expect(ProfilePage.MentalIllness.isDisplayed()).toBeTruthy();
  return ProfilePage.Diagnostic.isDisplayed();
}

export function HospitalAndSurgical() {
  ProfilePage.waitForElementIsShown(ProfilePage.HospitalSurgicalLink);
  ProfilePage.HospitalSurgicalLink.click();
  ProfilePage.waitForElementIsShown(ProfilePage.HospitalSurgicalHeader);
  expect(ProfilePage.RoomCare.isDisplayed()).toBeTruthy();
  expect(ProfilePage.IntensiveCare.isDisplayed()).toBeTruthy();
  expect(ProfilePage.MealSubsidy.isDisplayed()).toBeTruthy();
  expect(ProfilePage.HospitalService.isDisplayed()).toBeTruthy();
  expect(ProfilePage.PhysicianService.isDisplayed()).toBeTruthy();
  expect(ProfilePage.Inhospital.isDisplayed()).toBeTruthy();
  expect(ProfilePage.SurgeonFee.isDisplayed()).toBeTruthy();
  expect(ProfilePage.OperatingTheatre.isDisplayed()).toBeTruthy();
  return ProfilePage.AnnualLimit.isDisplayed();
}

export function Supplementary() {
  ProfilePage.waitForElementIsShown(ProfilePage.SupplementaryLink);
  ProfilePage.SupplementaryLink.click();
  expect(ProfilePage.SupplementaryHeader.isDisplayed()).toBeTruthy();
  expect(ProfilePage.SupplementaryLimit.isDisplayed()).toBeTruthy();
  return ProfilePage.SupplementaryLimit.isDisplayed();
}

export function Maternity() {
  ProfilePage.waitForElementIsShown(ProfilePage.MaternityLink);
  ProfilePage.MaternityLink.click();
  ProfilePage.waitForElementIsShown(ProfilePage.MaternityText);
  expect(ProfilePage.AntenatalText.isDisplayed()).toBeTruthy();
  expect(ProfilePage.LumpSumText.isDisplayed()).toBeTruthy();
  return ProfilePage.LumpSumText.isDisplayed();
}

export function Wellness() {
  ProfilePage.waitForElementIsShown(ProfilePage.WellnessLink);
  ProfilePage.WellnessLink.click();
  ProfilePage.waitForElementIsShown(ProfilePage.WellnessText);
  expect(ProfilePage.MaxLimitText.isDisplayed()).toBeTruthy();
  return ProfilePage.MaxLimitText.isDisplayed();
}

export function redCardVerification() {
  let randomIOS = Math.floor(Math.random() * 10000) + 'RedCard';
  browser.saveScreenshot(
    path.join(
      process.cwd(),
      'tests',
      'web-employee',
      'image',
      `cxa_web_${randomIOS}.png`
    )
  );
  browser.pause(1000);
  Jimp.read(
    path.join(
      process.cwd(),
      'tests',
      'web-employee',
      'image',
      `cxa_web_${randomIOS}.png`
    ),
    (err, imgae) => {
      if (err) {
        console.log(err);
      } else {
        imgae
          .crop(400, 200, 350, 240)
          .quality(100)
          .write(
            path.join(
              process.cwd(),
              'tests',
              'web-employee',
              'image',
              `CROPED_IOS_${randomIOS}.png`
            )
          );
      }
    }
  );

  driver.pause(1000);
  getColors(
    path.join(
      path.join(
        process.cwd(),
        'tests',
        'web-employee',
        'image',
        `CROPED_IOS_${randomIOS}.png`
      )
    )
  ).then((colors) => {
    var x = colors.map((color) => color.hex());
    expect(x.includes('#dc442c')).toBeTruthy();
  });

  return ProfilePage.virtualCardDate.isDisplayed();
}
