import { navigateToProfileScreen } from '../actions/navigator.action';
import { swipe, scroll, swipeSlider } from '../helpers/api';
import txt from '../helpers/text';
import ProfileScreen from '../screenobjects/profile.screen';
import {
  eHealthCardDetails,
  eHealthCardDetails1
} from '../../data/profile.data';
import profileScreen from '../screenobjects/profile.screen';
import { MyDetailsInformation } from '../../data/myDetail.data';

const path = require('path');
const getColors = require('get-image-colors');
var Jimp = require('jimp');
var fs = require('fs');
var QrCode = require('qrcode-reader');

export function profileLandingPage() {
  navigateToProfileScreen();
  ProfileScreen.waitForElementIsShown($(txt('William')));
  expect($(txt('William')).isDisplayed()).toBeTruthy();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  expect(ProfileScreen.eHealthCard.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.myBenefit.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.MyDetails.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.usefullDocument.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.Help.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.Settings.isDisplayed()).toBeTruthy();
  return ProfileScreen.Settings.isDisplayed();
}

function eHealthCardDetailsVerification() {
  for(var totalcardElement=2; totalcardElement<=9;totalcardElement++){
    expect($(`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[${totalcardElement}]`).isDisplayed()).toBeTruthy();
  }
}

export function eHealthCardVerification() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.eHealthCard.click();
  ProfileScreen.waitForElementIsShown($(txt('HSBC Health Plus')));
  eHealthCardDetailsVerification();
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function eHealthCardSwipeVerification() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.eHealthCard.click();
  swipeSlider(ProfileScreen.toFirst_eHealthcard, 0.25, 0);
  eHealthCardDetailsVerification(
    eHealthCardDetails1.Name,
    eHealthCardDetails1.membershipNo,
    eHealthCardDetails1.GP,
    eHealthCardDetails1.SP,
    eHealthCardDetails1.PHY
  );
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function scrollRightToLeft() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.eHealthCard.click();
  swipeSlider(ProfileScreen.toFirst_eHealthcard, 0.25, 0);
  swipeSlider(ProfileScreen.toSecond_eHealthcard, 0.25, 0);
  swipeSlider(ProfileScreen.toThird_eHealthcard, 0.25, 0);
  swipeSlider(ProfileScreen.toFourth_eHealthcard, 0.25, 0);
  swipeSlider(ProfileScreen.toFifth_eHealthcard, 0.25, 0);
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function blue_CardColor(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(ProfileScreen.myBenefit);
  ProfileScreen.myBenefit.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.viewFor);
  ProfileScreen.viewFor.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.SelectView);
  ProfileScreen.SelectView.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.blue_Tier);
  expect(ProfileScreen.blue_Tier.isDisplayed()).toBeTruthy();
  ProfileScreen.waitForElementIsShown($(txt('Outpatient')));
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.eHealthCard.click();
  swipeSlider(ProfileScreen.toFirst_eHealthcard, 0.25, 0);
  swipeSlider(ProfileScreen.toSecond_eHealthcard, 0.25, 0);
  swipeSlider(ProfileScreen.toThird_eHealthcard, 0.25, 0);
  ProfileScreen.waitForElementIsShown($(txt('Charlotte Brown Tan')));
  expect($(txt('Charlotte Brown Tan')).isDisplayed()).toBeTruthy();

  if (platform === 'ios') {
    let randomIOS = Math.floor(Math.random() * 10000) + '_blueCard';
    driver.saveScreenshot(
      path.join(process.cwd(), 'image', `IOS_${randomIOS}.png`)
    );
    driver.pause(1000);
    Jimp.read(
      path.join(process.cwd(), 'image', `IOS_${randomIOS}.png`),
      (err, imgae) => {
        if (err) {
          console.log(err);
        } else {
          imgae
            .crop(115, 578, 700, 600)
            .quality(80)
            .write(
              path.join(process.cwd(), 'image', `CROPED_IOS_${randomIOS}.png`)
            );
        }
      }
    );

    driver.pause(1000);

    getColors(
      path.join(
        path.join(process.cwd(), 'image', `CROPED_IOS_${randomIOS}.png`)
      )
    ).then((colors) => {
      var x = colors.map((color) => color.hex());
      expect(x.includes('#3d9bca')).toBeTruthy();
    });
    ProfileScreen.headerBack.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    return ProfileScreen.eHealthCard.isDisplayed();
  }

  if (platform === 'android') {
    let randomAndroid = Math.floor(Math.random() * 10000) + '_blueCard';
    driver.saveScreenshot(
      path.join(process.cwd(), 'image', `Android_${randomAndroid}.png`)
    );
    driver.pause(1000);

    Jimp.read(
      path.join(process.cwd(), 'image', `Android_${randomAndroid}.png`),
      (err, imgae) => {
        if (err) {
          console.log(err);
        } else {
          imgae
            .crop(115, 578, 700, 600)
            .quality(80)
            .write(
              path.join(
                process.cwd(),
                'image',
                `CROPED_Android_${randomAndroid}.png`
              )
            );
        }
      }
    );

    driver.pause(1000);

    getColors(
      path.join(process.cwd(), 'image', `CROPED_Android_${randomAndroid}.png`)
    ).then((colors) => {
      var x = colors.map((color) => color.hex());
      expect(x.includes('#3c9ccc')).toBeTruthy();
    });
    ProfileScreen.headerBack.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    return ProfileScreen.eHealthCard.isDisplayed();
  }
}

export function Red_CardColor(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(ProfileScreen.myBenefit);
  ProfileScreen.myBenefit.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.Red_viewFor);
  ProfileScreen.Red_viewFor.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.Red_SelectView);
  ProfileScreen.Red_SelectView.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.Red_Tier);
  expect(ProfileScreen.Red_Tier.isDisplayed()).toBeTruthy();
  ProfileScreen.waitForElementIsShown($(txt('Outpatient')));
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.eHealthCard.click();
  swipeSlider(ProfileScreen.toFirst_eHealthcard, 0.25, 0);
  ProfileScreen.waitForElementIsShown($(txt('Catherine Brown Tan')));
  expect($(txt('Catherine Brown Tan')).isDisplayed()).toBeTruthy();

  if (platform === 'ios') {
    let randomIOS = Math.floor(Math.random() * 10000) + '_RedCard';
    driver.saveScreenshot(
      path.join(process.cwd(), 'image', `IOS_${randomIOS}.png`)
    );
    driver.pause(1000);

    Jimp.read(
      path.join(process.cwd(), 'image', `IOS_${randomIOS}.png`),
      (err, imgae) => {
        if (err) {
          console.log(err);
        } else {
          imgae
            .crop(115, 578, 700, 600)
            .quality(80)
            .write(
              path.join(process.cwd(), 'image', `CROPED_IOS_${randomIOS}.png`)
            );
        }
      }
    );

    driver.pause(1000);
    getColors(
      path.join(
        path.join(process.cwd(), 'image', `CROPED_IOS_${randomIOS}.png`)
      )
    ).then((colors) => {
      var x = colors.map((color) => color.hex());
      expect(x.includes('#da0514')).toBeTruthy();
    });
    ProfileScreen.headerBack.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    return ProfileScreen.eHealthCard.isDisplayed();
  }

  if (platform === 'android') {
    let randomAndroid = Math.floor(Math.random() * 10000) + '_RedCard';
    driver.saveScreenshot(
      path.join(process.cwd(), 'image', `Android_${randomAndroid}.png`)
    );
    driver.pause(1000);

    Jimp.read(
      path.join(process.cwd(), 'image', `Android_${randomAndroid}.png`),
      (err, imgae) => {
        if (err) {
          console.log(err);
        } else {
          imgae
            .crop(115, 578, 700, 600)
            .quality(80)
            .write(
              path.join(
                process.cwd(),
                'image',
                `CROPED_Android_${randomAndroid}.png`
              )
            );
        }
      }
    );

    driver.pause(1000);

    getColors(
      path.join(process.cwd(), 'image', `CROPED_Android_${randomAndroid}.png`)
    ).then((colors) => {
      var x = colors.map((color) => color.hex());
      expect(x.includes('#dc0414')).toBeTruthy();
    });
    ProfileScreen.headerBack.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    return ProfileScreen.eHealthCard.isDisplayed();
  }
}

export function Get_QR_Code_data(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.eHealthCard.click();
  swipeSlider(ProfileScreen.toFirst_eHealthcard, 0.25, 0);
  ProfileScreen.waitForElementIsShown($(txt('Catherine Brown Tan')));
  expect($(txt('Catherine Brown Tan')).isDisplayed()).toBeTruthy();

  if (platform === 'ios') {
    let randomGenerator_IOS = Math.floor(Math.random() * 10000) + '_QRCard';

    driver.saveScreenshot(
      path.join(process.cwd(), 'image', `IOS_${randomGenerator_IOS}.png`)
    );
    driver.pause(1000);

    // Crop Image

    Jimp.read(
      path.join(process.cwd(), 'image', `IOS_${randomGenerator_IOS}.png`),
      (err, imgae) => {
        if (err) {
          console.log(err);
        } else {
          imgae
            .crop(267, 1050, 600, 600)
            .quality(80)
            .write(
              path.join(
                process.cwd(),
                'image',
                `QR_CROPPED_IOS_${randomGenerator_IOS}.png`
              )
            );
        }
      }
    );

    driver.pause(1000);

    // Resize
    Jimp.read(
      path.join(
        process.cwd(),
        'image',
        `QR_CROPPED_IOS_${randomGenerator_IOS}.png`
      )
    )
      .then((lenna) => {
        return lenna
          .resize(184, 184)
          .quality(60)
          .write(
            path.join(
              process.cwd(),
              'image',
              `QR_Resized_IOS_${randomGenerator_IOS}.png`
            )
          );
      })
      .catch((err) => {
        console.error(err);
      });

    driver.pause(1000);

    // Fetch xml

    var buffer = fs.readFileSync(
      path.join(
        process.cwd(),
        'image',
        `QR_Resized_IOS_${randomGenerator_IOS}.png`
      )
    );
    Jimp.read(buffer, function(err, image) {
      if (err) {
        console.log(err);
      }
      var qr = new QrCode();
      qr.callback = function(err, value) {
        if (err) {
          console.log(err);
        }
        fs.writeFile(
          path.join(process.cwd(), 'tests', 'data', 'IOS.xml'),
          value.result,
          function(err) {
            if (err) return err;
          }
        );
      };
      qr.decode(image.bitmap);
    });
  }

  if (platform === 'android') {
    let randomGenerator_Android = Math.floor(Math.random() * 10000) + '_QRCard';

    driver.saveScreenshot(
      path.join(
        process.cwd(),
        'image',
        `Android_${randomGenerator_Android}.png`
      )
    );
    driver.pause(1000);

    // Crop Image

    Jimp.read(
      path.join(
        process.cwd(),
        'image',
        `Android_${randomGenerator_Android}.png`
      ),
      (err, imgae) => {
        if (err) {
          console.log(err);
        } else {
          imgae
            .crop(328, 1200, 800, 800)
            .quality(80)
            .write(
              path.join(
                process.cwd(),
                'image',
                `QR_CROPPED_Android_${randomGenerator_Android}.png`
              )
            );
        }
      }
    );

    driver.pause(1000);

    // Resize
    Jimp.read(
      path.join(
        process.cwd(),
        'image',
        `QR_CROPPED_Android_${randomGenerator_Android}.png`
      )
    )
      .then((lenna) => {
        return lenna
          .resize(184, 184)
          .quality(60)
          .write(
            path.join(
              process.cwd(),
              'image',
              `QR_Resized_Android_${randomGenerator_Android}.png`
            )
          );
      })
      .catch((err) => {
        console.error(err);
      });

    driver.pause(1000);

    // Fetch xml

    var buffer1 = fs.readFileSync(
      path.join(
        process.cwd(),
        'image',
        `QR_Resized_Android_${randomGenerator_Android}.png`
      )
    );
    Jimp.read(buffer1, function(err, image) {
      if (err) {
        console.log(err);
      }
      var qr = new QrCode();
      qr.callback = function(err, value) {
        if (err) {
          console.log(err);
        }
        fs.writeFile(
          path.join(process.cwd(), 'tests', 'data', 'Android.xml'),
          value.result,
          function(err) {
            if (err) return err;
          }
        );
      };
      qr.decode(image.bitmap);
    });
  }

  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function myBenefits(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(ProfileScreen.myBenefit);
  ProfileScreen.myBenefit.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.dropdownForBenefitCard);
  expect(ProfileScreen.employeeDependants.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.outpatients.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.hospitalSurgical.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.supplimentalMajorMedical.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.maternitySubsidy.isDisplayed()).toBeTruthy();
  expect(
    ProfileScreen.wellnessFlexibleSpendingAmount.isDisplayed()
  ).toBeTruthy();
  if (platform === 'ios') {
    swipe({ direction: 'up' }, () => {
      expect(ProfileScreen.policyNumber.isDisplayed()).toBeTruthy();
      expect(ProfileScreen.insurer.isDisplayed()).toBeTruthy();
      expect(ProfileScreen.effectivePeriod.isDisplayed()).toBeTruthy();
      ProfileScreen.headerBack.click();
      ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    });
  }

  if (platform === 'android') {
    scroll({ text: 'Effective period' }, () => {
      expect(ProfileScreen.policyNumber.isDisplayed()).toBeTruthy();
      expect(ProfileScreen.insurer.isDisplayed()).toBeTruthy();
      expect(ProfileScreen.effectivePeriod.isDisplayed()).toBeTruthy();
      ProfileScreen.headerBack.click();
      ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    });
  }
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function DependantMyBenefits(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(ProfileScreen.myBenefit);
  ProfileScreen.myBenefit.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.dropdownForBenefitCard);
  ProfileScreen.dropdownForBenefitCard.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.selectDependant);
  ProfileScreen.selectDependant.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.outpatients);
  expect(ProfileScreen.outpatients.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.hospitalSurgical.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.supplimentalMajorMedical.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.maternitySubsidy.isDisplayed()).toBeTruthy();
  expect(
    ProfileScreen.wellnessFlexibleSpendingAmount.isDisplayed()
  ).toBeTruthy();
  if (platform === 'ios') {
    swipe({ direction: 'up' }, () => {
      expect(ProfileScreen.policyNumber.isDisplayed()).toBeTruthy();
      expect(ProfileScreen.insurer.isDisplayed()).toBeTruthy();
      expect(ProfileScreen.effectivePeriod.isDisplayed()).toBeTruthy();
      ProfileScreen.headerBack.click();
      ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    });
  }

  if (platform === 'android') {
    scroll({ text: 'Effective period' }, () => {
      expect(ProfileScreen.policyNumber.isDisplayed()).toBeTruthy();
      expect(ProfileScreen.insurer.isDisplayed()).toBeTruthy();
      expect(ProfileScreen.effectivePeriod.isDisplayed()).toBeTruthy();
      ProfileScreen.headerBack.click();
      ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    });
  }
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function MyBenefitsDetails() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.myBenefit);
  return ProfileScreen.myBenefit.isDisplayed();
}

export function OutpatientDetails(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(ProfileScreen.myBenefit);
  ProfileScreen.myBenefit.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.outpatients);
  ProfileScreen.outpatients.click();

  if (platform === 'android') {
    ProfileScreen.waitForElementIsShown(
      ProfileScreen.general_medical_practitioner
    );
    expect(
      ProfileScreen.general_medical_practitioner.isDisplayed()
    ).toBeTruthy();
    expect(ProfileScreen.Specialist.isDisplayed()).toBeTruthy();
    ProfileScreen.scrollDownToElement(ProfileScreen.Mental_illness, 50);
    ProfileScreen.waitForElementIsShown(ProfileScreen.Physiotherapy);
    expect(ProfileScreen.Physiotherapy.isDisplayed()).toBeTruthy();
    ProfileScreen.scrollDownToElement(ProfileScreen.Diagnostic_x_ray, 50);
    expect(ProfileScreen.Mental_illness.isDisplayed()).toBeTruthy();
    ProfileScreen.scrollDownToElement(ProfileScreen.Medication_purchased, 50);
    expect(ProfileScreen.Diagnostic_x_ray.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Medication_purchased.isDisplayed()).toBeTruthy();
    ProfileScreen.headerBack.click();
  }

  if (platform === 'ios') {
    ProfileScreen.waitForElementIsShown(
      ProfileScreen.general_medical_practitioner
    );

    expect(
      ProfileScreen.general_medical_practitioner.isDisplayed()
    ).toBeTruthy();
    expect(ProfileScreen.Specialist.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Physiotherapy.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Mental_illness, 50);
    ProfileScreen.waitForElementIsShown(ProfileScreen.Mental_illness);

    expect(ProfileScreen.Mental_illness.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Diagnostic_x_ray.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Medication_purchased, 50);
    expect(ProfileScreen.Medication_purchased.isDisplayed()).toBeTruthy();

    ProfileScreen.headerBack.click();
  }

  ProfileScreen.waitForElementIsShown(ProfileScreen.outpatients);
  return ProfileScreen.outpatients.isDisplayed();
}

export function Hospital_and_Surgical_Details(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(ProfileScreen.hospitalSurgical);
  ProfileScreen.hospitalSurgical.click();

  if (platform === 'android') {
    ProfileScreen.waitForElementIsShown(ProfileScreen.Room_Board_nursing);
    expect(ProfileScreen.Room_Board_nursing.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Room_Board_nursing_limit.isDisplayed()).toBeTruthy();
    expect(
      ProfileScreen.Room_Board_nursing_disability.isDisplayed()
    ).toBeTruthy();
    expect(ProfileScreen.Intensive_care.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Physician_Services, 50);

    expect(ProfileScreen.Meal_subsidy.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Hospital_Service.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Physician_Services.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.In_Hospital, 50);
    expect(ProfileScreen.In_Hospital.isDisplayed()).toBeTruthy();

    profileScreen.scrollDownToElement(ProfileScreen.Surgeon_fees_Major, 50);
    expect(ProfileScreen.Surgeon_fees.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Surgeon_fees_Complex.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Surgeon_fees_Major.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Surgeon_fees_Minor, 50);
    expect(ProfileScreen.Surgeon_fees_Inter.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Surgeon_fees_Minor.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Anaesthetist, 50);
    expect(ProfileScreen.Anaesthetist.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Anaesthetist_Complex.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Anaesthetist_Minor, 50);
    expect(ProfileScreen.Anaesthetist_Inter.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Anaesthetist_Minor.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Operating, 50);
    expect(ProfileScreen.Operating.isDisplayed()).toBeTruthy();
    ProfileScreen.waitForElementIsShown(profileScreen.Operating_Complex);
    expect(ProfileScreen.Operating_Complex.isDisplayed()).toBeTruthy();
    ProfileScreen.waitForElementIsShown(ProfileScreen.Operating_major);
    expect(ProfileScreen.Operating_major.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Operating_Minor, 50);
    expect(ProfileScreen.Operating_Inter.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Operating_Minor.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Annual_Overall_limit, 50);
    expect(ProfileScreen.Annual_Overall_limit.isDisplayed()).toBeTruthy();
  }

  if (platform === 'ios') {
    ProfileScreen.waitForElementIsShown(ProfileScreen.Room_Board_nursing);

    expect(ProfileScreen.Room_Board_nursing.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Room_Board_nursing_limit.isDisplayed()).toBeTruthy();
    expect(
      ProfileScreen.Room_Board_nursing_disability.isDisplayed()
    ).toBeTruthy();
    expect(ProfileScreen.Intensive_care.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Meal_subsidy.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Physician_Services, 50);
    ProfileScreen.waitForElementIsShown(ProfileScreen.Hospital_Service);
    expect(ProfileScreen.Hospital_Service.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Physician_Services.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.In_Hospital, 50);
    ProfileScreen.waitForElementIsShown(ProfileScreen.In_Hospital);
    expect(ProfileScreen.In_Hospital.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Surgeon_fees.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Surgeon_fees_Complex.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Surgeon_fees_Major.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Surgeon_fees_Minor, 50);
    ProfileScreen.waitForElementIsShown(ProfileScreen.Surgeon_fees_Inter);
    expect(ProfileScreen.Surgeon_fees_Inter.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Surgeon_fees_Minor.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Anaesthetist_Minor, 50);
    ProfileScreen.waitForElementIsShown(ProfileScreen.Anaesthetist_Major);

    expect(ProfileScreen.Anaesthetist_Major.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Anaesthetist_Inter.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Anaesthetist_Minor.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Operating_Minor, 50);
    ProfileScreen.waitForElementIsShown(ProfileScreen.Operating_major);

    expect(ProfileScreen.Operating_major.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Operating_Inter.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Operating_Minor.isDisplayed()).toBeTruthy();

    ProfileScreen.scrollDownToElement(ProfileScreen.Annual_Overall_limit, 50);
    ProfileScreen.waitForElementIsShown(ProfileScreen.Annual_Overall_limit);

    expect(ProfileScreen.Annual_Overall_limit.isDisplayed()).toBeTruthy();
  }
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.outpatients);
  return ProfileScreen.outpatients.isDisplayed();
}

export function SupplementaryDetails() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.supplimentalMajorMedical);
  ProfileScreen.supplimentalMajorMedical.click();

  ProfileScreen.waitForElementIsShown(ProfileScreen.Supplimental);
  expect(ProfileScreen.Supplimental.isDisplayed()).toBeTruthy();
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.outpatients);
  return ProfileScreen.outpatients.isDisplayed();
}

export function MaternityDetails(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(ProfileScreen.maternitySubsidy);
  ProfileScreen.maternitySubsidy.click();

  if (platform === 'android') {
    ProfileScreen.waitForElementIsShown(ProfileScreen.Maternity_Lump);
    expect(ProfileScreen.Maternity_Lump.isDisplayed()).toBeTruthy();
  }

  if (platform === 'ios') {
    expect(ProfileScreen.Maternity_Antenatal.isDisplayed()).toBeTruthy();
    expect(ProfileScreen.Maternity_Lump.isDisplayed()).toBeTruthy();
  }

  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.outpatients);
  return ProfileScreen.outpatients.isDisplayed();
}

export function WellnessDetails(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(
    ProfileScreen.wellnessFlexibleSpendingAmount
  );
  ProfileScreen.wellnessFlexibleSpendingAmount.click();

  if (platform === 'android') {
    ProfileScreen.waitForElementIsShown(ProfileScreen.WellnessMax);
    expect(ProfileScreen.WellnessMax.isDisplayed()).toBeTruthy();
  }
  if (platform === 'ios') {
    ProfileScreen.waitForElementIsShown(ProfileScreen.WellnessMax);
    expect(ProfileScreen.WellnessMax.isDisplayed()).toBeTruthy();
  }

  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.outpatients);
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function MyDetailsPage() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.waitForElementIsShown(ProfileScreen.MyDetails);
  ProfileScreen.MyDetails.click();
  ProfileScreen.waitForElementIsShown($(txt(MyDetailsInformation.Name)));
  expect($(txt(MyDetailsInformation.Name)).isDisplayed()).toBeTruthy();
  ProfileScreen.waitForElementIsShown(
    $(txt(MyDetailsInformation.Membership_Number))
  );
  expect(
    $(txt(MyDetailsInformation.Membership_Number)).isDisplayed()
  ).toBeTruthy();
  ProfileScreen.waitForElementIsShown(ProfileScreen.headerBack);
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

function clickOnCloseHeaderOnPDF(platform) {
  if (platform === 'ios') {
    swipe({ direction: 'up' }, () => {
      ProfileScreen.headerBack.click();
    });
  }
  if (platform === 'android') {
    scroll({ text: '2of 2' }, () => {
      ProfileScreen.headerBack.click();
    });
  }
}

export function formsAndDocumentsWellnessClaim(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.waitForElementIsShown(ProfileScreen.usefullDocument);
  ProfileScreen.usefullDocument.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.wellnessClaimForm);
  ProfileScreen.wellnessClaimForm.click();
  if (platform === 'android') {
    ProfileScreen.waitForElementIsShown(ProfileScreen.upLoadPDF);
    ProfileScreen.shareButton.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.ShareWindow);
    ProfileScreen.bluetooth.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.bluetoothCancle);
    ProfileScreen.bluetoothCancle.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.headerBack);
  }

  if (platform === 'ios') {
    ProfileScreen.shareButton.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.cancleBtn);
    ProfileScreen.cancleBtn.click();
  }
  clickOnCloseHeaderOnPDF(platform);
  ProfileScreen.waitForElementIsShown(ProfileScreen.wellnessClaimForm);
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function formsAndDocumentsMaternitySubsidy(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(ProfileScreen.usefullDocument);
  ProfileScreen.usefullDocument.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.maternitySubsidyClaimForm);
  ProfileScreen.maternitySubsidyClaimForm.click();
  if (platform === 'android') {
    ProfileScreen.waitForElementIsShown(ProfileScreen.upLoadPDF);
    ProfileScreen.shareButton.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.ShareWindow);
    ProfileScreen.bluetooth.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.bluetoothCancle);
    ProfileScreen.bluetoothCancle.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.headerBack);
  }

  if (platform === 'ios') {
    ProfileScreen.shareButton.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.cancleBtn);
    ProfileScreen.cancleBtn.click();
  }
  clickOnCloseHeaderOnPDF(platform);
  ProfileScreen.waitForElementIsShown(ProfileScreen.wellnessClaimForm);
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function formsAndDocumentsHospitalSurgical(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  ProfileScreen.waitForElementIsShown(ProfileScreen.usefullDocument);
  ProfileScreen.usefullDocument.click();
  ProfileScreen.waitForElementIsShown(
    ProfileScreen.hospitalizationSurgicalClaimForm
  );
  ProfileScreen.hospitalizationSurgicalClaimForm.click();
  if (platform === 'android') {
    ProfileScreen.waitForElementIsShown(ProfileScreen.upLoadPDF);
    ProfileScreen.shareButton.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.ShareWindow);
    ProfileScreen.bluetooth.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.bluetoothCancle);
    ProfileScreen.bluetoothCancle.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.headerBack);
  }

  if (platform === 'ios') {
    ProfileScreen.shareButton.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.cancleBtn);
    ProfileScreen.cancleBtn.click();
  }

  clickOnCloseHeaderOnPDF(platform);
  ProfileScreen.waitForElementIsShown(
    ProfileScreen.hospitalizationSurgicalClaimForm
  );
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function HelpPage() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.waitForElementIsShown(ProfileScreen.Help);
  ProfileScreen.Help.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.Help_Phone);
  expect(ProfileScreen.Help_Phone.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.Help_Contact_mail.isDisplayed()).toBeTruthy();
  expect(
    ProfileScreen.Help_Frequently_asked_Question.isDisplayed()
  ).toBeTruthy();
  expect(ProfileScreen.Customer_Support_hour.isDisplayed()).toBeTruthy();

  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function CallForhelp() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.Help.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.HelpCallFunction);
  if (ProfileScreen.HelpCallFunction.isEnabled()) {
    ProfileScreen.HelpCallFunction.click();
    driver.setImplicitTimeout(5000);

    if (ProfileScreen.dial.isDisplayed()) {
      ProfileScreen.dial.click();
      ProfileScreen.waitForElementIsShown(ProfileScreen.endCall);
      ProfileScreen.endCall.click();
      driver.back();
      driver.back();
    }

    driver.pause(2000);

    if (ProfileScreen.HelpCallFunction.isDisplayed()) {
      ProfileScreen.headerBack.click();
    }
  }
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function EmailForhelp(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  if (platform === 'android') {
    ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    ProfileScreen.Help.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.HelpEmailFunction);
    ProfileScreen.HelpEmailFunction.click();
    driver.pause(2000);
    if (ProfileScreen.NextBtn.isDisplayed()) {
      ProfileScreen.waitForElementIsShown(ProfileScreen.NextBtn);
      driver.back();
    }
    ProfileScreen.waitForElementIsShown(ProfileScreen.headerBack);
    ProfileScreen.headerBack.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    return ProfileScreen.eHealthCard.isDisplayed();
  }

  if (platform === 'ios') {
    ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    ProfileScreen.Help.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.HelpEmailFunction);
    if (ProfileScreen.HelpEmailFunction.isEnabled()) {
      ProfileScreen.waitForElementIsShown(ProfileScreen.HelpEmailFunction);
      ProfileScreen.HelpEmailFunction.click();
      driver.pause(20000);
      if (ProfileScreen.NextBtn.isDisplayed()) {
        ProfileScreen.NextBtn.click();
        driver.back();
        driver.back();
      }
    }
    ProfileScreen.waitForElementIsShown(ProfileScreen.headerBack);
    ProfileScreen.headerBack.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    return ProfileScreen.eHealthCard.isDisplayed();
  }
}

export function Frequently_asked_questions() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.Help.click();

  ProfileScreen.waitForElementIsShown(ProfileScreen.Frequently_asked_que);
  ProfileScreen.Frequently_asked_que.click();

  ProfileScreen.waitForElementIsShown(ProfileScreen.Coverage);
  expect(ProfileScreen.Coverage.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.Membership_Servicing.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.Claims_Statement.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.Claims_Status.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.Claims_Outpatient.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.Claims_Inpatient.isDisplayed()).toBeTruthy();
  expect(ProfileScreen.Claims_General.isDisplayed()).toBeTruthy();
  ProfileScreen.headerBack.click();
  driver.pause(2000);

  if (ProfileScreen.Frequently_asked_que.isDisplayed()) {
    ProfileScreen.headerBack.click();
    ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    return ProfileScreen.eHealthCard.isDisplayed();
  } else {
    ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
    return ProfileScreen.eHealthCard.isDisplayed();
  }
}

export function Customer_support_hours() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.Help.click();

  ProfileScreen.waitForElementIsShown(ProfileScreen.Frequently_asked_que);
  expect(ProfileScreen.Support_hours.isDisplayed()).toBeTruthy();
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function ChangeLanguage() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.scrollDownToElement(ProfileScreen.Settings);
  ProfileScreen.Settings.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.languagetab);
  ProfileScreen.languagetab.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.Chinese);
  ProfileScreen.Chinese.click();
  ProfileScreen.waitForElementIsShown($(txt('William')));
  ProfileScreen.waitForElementIsShown(ProfileScreen.SettingInChinese);
  ProfileScreen.SettingInChinese.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.ClickOnLanguage);
  ProfileScreen.ClickOnLanguage.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.ChooseEnglishLanguage);
  ProfileScreen.ChooseEnglishLanguage.click();
  ProfileScreen.waitForElementIsShown($(txt('William')));
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function TermAndCondition() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.scrollDownToElement(ProfileScreen.Settings);
  ProfileScreen.Settings.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.Terms);
  ProfileScreen.Terms.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.TermsScreen);
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.Terms);
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function PrivacyPolicy() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.scrollDownToElement(ProfileScreen.Settings);
  ProfileScreen.Settings.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.Policy);
  ProfileScreen.Policy.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.PolicyScreen);
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.Policy);
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function appVersion() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.scrollDownToElement(ProfileScreen.Settings);
  ProfileScreen.Settings.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.languagetab);
  ProfileScreen.waitForElementIsShown(ProfileScreen.logoutBtn);
  expect(ProfileScreen.AppVersion.isDisplayed()).toBeTruthy();
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  return ProfileScreen.eHealthCard.isDisplayed();
}

export function logout() {
  ProfileScreen.waitForElementIsShown(ProfileScreen.eHealthCard);
  ProfileScreen.scrollDownToElement(ProfileScreen.Settings);
  ProfileScreen.Settings.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.languagetab);
  ProfileScreen.waitForElementIsShown(ProfileScreen.logoutBtn);
  ProfileScreen.logoutBtn.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.welcomeScreen);
  return ProfileScreen.welcomeScreen.isDisplayed();
}
export function login_TermAndCondition() {
  ProfileScreen.welcomeScreen.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.TnC);
  ProfileScreen.TnC.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.LoginTermsScreen);
  ProfileScreen.waitForElementIsShown(ProfileScreen.TnC_BackBtn);
  ProfileScreen.TnC_BackBtn.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.welcomeScreen);
  return ProfileScreen.welcomeScreen.isDisplayed();
}

export function forgotPassword() {
  ProfileScreen.welcomeScreen.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.ForgotLink);
  ProfileScreen.ForgotLink.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.CompanyName);
  ProfileScreen.forgotPasswordScreen.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.ResetBtn);
  ProfileScreen.ResetBtn.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.alertBox);
  ProfileScreen.waitForElementIsShown(ProfileScreen.ClickOnOk);
  ProfileScreen.ClickOnOk.click();
  ProfileScreen.headerBack.click();
  ProfileScreen.waitForElementIsShown(ProfileScreen.welcomeScreen);
  return ProfileScreen.welcomeScreen.isDisplayed();
}
