import { loginAs } from '../actions/login.action';
import {
  validCredentials,
  sixGraph,
  oneGraph,
  validCredentials2
} from '../../data/login.data';
import {
  updateHealthData,
  expectResultHealthData,
  clinic
} from '../../data/health.data';

import { platform as getPlatform } from '../helpers/api';
import * as healthAction from '../actions/health.action';

fdescribe('User should be able to: ', () => {
  beforeAll(() => {});

  afterEach(() => {
    driver.reset();
  });
  // [jprmerginio] to be enabled once pipeline is available
  // Story #4: Displaying of the health landing page
  fit('see the health landing page before any health data is provided', () => {
    loginAs(validCredentials2);
    // expect(healthAction.isLandingHealthPageDisplayed()).toBeTruthy();
    // expect(healthAction.isLifeStyleTabSelected).toBeTruthy();
    // expect(healthAction.isAddMyHealthDataButtonDisplayed()).toBeTruthy();
    // expect(healthAction.isSearchForClinicButtonDisplayed()).toBeTruthy();
  });

  // Story #22: Displaying of BMI and Prediabetes results
  // Story #31: Upload photo from mobile gallery for face aging
  // [update this section for] Story #90: Update script to add additional health results (prediabetes, etc.)
  it('update BMI, prediabetes, and upload a valid photo, afterwards, verify the result', () => {
    loginAs(validCredentials2);
    healthAction.clickUpdateHealthDataButton();

    // input BMI, Prediabetes, and upload a valid photo before clicking the next button
    healthAction.updateHealthAs(updateHealthData);

    // verify BMI, Prediabetes, other health results, and the uploaded photo
    // afterwards, DO NOT close the session as the next script should automatically be executed (face aging slider)
    expect(
      healthAction.isBMIDisplayCorrectly(
        expectResultHealthData.BMI,
        expectResultHealthData.BMIStatus,
        expectResultHealthData.BMIStatement
      )
    ).toBeTruthy();
  });

  it('Story #31: Upload photo from mobile gallery for face aging', () => {
    // merge this with "update BMI, prediabetes, and upload a valid photo, afterwards, verify the result"
    healthAction.copyImageToLibrary(); // Pre-condition: Copy image to iOS

    loginAs(validCredentials); // remove this since it will be merged
    healthAction.clickUpdateHealthDataButton(); // remove this since it will be merged

    healthAction.removePhoto(); // Pre-condition: Remove photo if a photo exists

    // select a photo
    healthAction.selectPhoto();

    // verify taken photo is uploaded and displayed in the health page
    expect(healthAction.isPhotoExistingOnUpdatePage()).toBeTruthy();

    healthAction.clickNextButton(); // merge this with "input BMI, Prediabetes, and upload a valid photo before clicking the next button"

    expect(healthAction.isPhotoExistingOnLifestylePage()).toBeTruthy(); // merge this with "verify BMI, Prediabetes, and uploaded photo"
  });

  // Story #32: Face aging slider
  it('view the different ages using the age slider', () => {
    healthAction.copyImageToLibrary(); // remove this since after "update BMI, prediabetes, and upload a valid photo, afterwards, verify the result" completes, this will be executed
    loginAs(validCredentials); // remove this since after "update BMI, prediabetes, and upload a valid photo, afterwards, verify the result" completes, this will be executed

    healthAction.clickUpdateHealthDataButton(); // remove this since after "update BMI, prediabetes, and upload a valid photo, afterwards, verify the result" completes, this will be executed

    healthAction.removePhoto(); // remove this since after "update BMI, prediabetes, and upload a valid photo, afterwards, verify the result" completes, this will be executed
    healthAction.selectPhoto(); // remove this since after "update BMI, prediabetes, and upload a valid photo, afterwards, verify the result" completes, this will be executed
    expect(healthAction.isPhotoExistingOnUpdatePage()).toBeTruthy(); // remove this since after "update BMI, prediabetes, and upload a valid photo, afterwards, verify the result" completes, this will be executed
    healthAction.clickNextButton(); // remove this since after "update BMI, prediabetes, and upload a valid photo, afterwards, verify the result" completes, this will be executed
    expect(healthAction.isPhotoExistingOnLifestylePage()).toBeTruthy(); // remove this since after "update BMI, prediabetes, and upload a valid photo, afterwards, verify the result" completes, this will be executed

    // verify future you at the age of 35
    expect(healthAction.isFutureYouAtTheAgeOf('35')).toBeTruthy();
    healthAction.slideFaceAging(0, 0.25);

    // verify future you at the age of 45
    expect(healthAction.isFutureYouAtTheAgeOf('45')).toBeTruthy();
    healthAction.slideFaceAging(0.25, 0.5);

    // verify future you at the age of 55
    expect(healthAction.isFutureYouAtTheAgeOf('55')).toBeTruthy();
    healthAction.slideFaceAging(0.5, 0.75);

    // verify future you at the age of 67
    expect(healthAction.isFutureYouAtTheAgeOf('67')).toBeTruthy();
    healthAction.slideFaceAging(0.75, 1);

    // verify future you at the age of 75
    expect(healthAction.isFutureYouAtTheAgeOf('75')).toBeTruthy();
  });

  // Story #38: View bar graph risk score
  // QA Notes: not in scope, verifying the actual risk score in the bar graph
  it('view the bar graph risk scores', () => {
    const platform = getPlatform();

    if (platform === 'ios') {
      loginAs(sixGraph); // Pre-condition: Login as account with six graphs
      expect(healthAction.isBarGraphRiskDisplay()).toBeTruthy();
      expect(healthAction.countBarGraph()).toBe(6);

      driver.reset();

      loginAs(oneGraph); // Pre-condition: Login as account with only one graph
      expect(healthAction.isBarGraphRiskDisplay()).toBeTruthy();
      expect(healthAction.countBarGraph()).toBe(6);
    }
  });

  // Story #36: View panel search page - accept location access
  it('access panel search page', () => {
    loginAs(validCredentials); // remove this since after "view the different ages using the age slider" completes, this will be executed
    healthAction.clickSearchForClinicButton();
    healthAction.allowAccessLocation(); // allow location access
    expect(healthAction.isHealthMapsPageDisplayed()).toBeTruthy(); // map displayed based on your users location
  });

  // Story #47: Display clinic details on map view
  it('see the clinic details on map view', () => {
    loginAs(validCredentials); // remove this since after "access panel search page" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "access panel search page" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "access panel search page" completes, this will be executed

    healthAction.searchForClinic(clinic.Name); // search for a clinic
    expect(healthAction.isClinicDisplayeWithName(clinic.Name)).toBeTruthy(); // clinic is displayed
    healthAction.clickOnClinic(clinic.Name);
    expect(healthAction.isClinicDetailPageDisplayed()).toBeTruthy(); // clinic details displayed on map view
  });

  // Story #48: Call functionality on map view
  it('use the call function on map view', () => {
    const platform = getPlatform();

    if (platform === 'android') {
      loginAs(validCredentials); // remove this since after "see the clinic details on map view" completes, this will be executed
      healthAction.clickSearchForClinicButton(); // remove this since after "see the clinic details on map view" completes, this will be executed
      healthAction.allowAccessLocation(); // remove this since after "see the clinic details on map view" completes, this will be executed

      healthAction.clickOnCallButton();
      expect(healthAction.isCallPageDisplayed()).toBeTruthy(); // phones native call functionality is executed
      // add a script to go back to the mobile app (or) click the back button
    }
  });

  // Story #49: Directions functionality on map view
  it('use the directions function on map view', () => {
    loginAs(validCredentials); // remove this since after "use the call function on map view" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "use the call function on map view" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "use the call function on map view" completes, this will be executed

    healthAction.clickOnDirectionButton();
    expect(healthAction.isDirectionPageDisplayed()).toBeTruthy(); // directions is displayed using google maps
    // add a script to go back to the mobile app (or) click the back button
  });

  // Story #53: Call functionality on additional clinic information
  it('use the call function when a clinic is clicked on map view', () => {
    loginAs(validCredentials); // remove this since after "use the directions function on map view" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "use the directions function on map view" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "use the directions function on map view" completes, this will be executed
    healthAction.searchForClinic(clinic.Name); // remove this since after "use the directions function on map view" completes, this will be executed

    healthAction.clickOnClinic(clinic.Name);
    healthAction.clickOnCallButtonOnDetailsPage(clinic.Number);
    expect(healthAction.isCallPageDisplayed()).toBeTruthy(); // phones native call functionality is executed
    // add a script to go back to the mobile app (or) click the back button
  });

  // Story #54: Directions functionality on additional clinic information (map view)
  it('use the directions function when a clinic is clicked on map view', () => {
    loginAs(validCredentials); // remove this since after "use the call function when a clinic is clicked on map view" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "use the call function when a clinic is clicked on map view" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "use the call function when a clinic is clicked on map view" completes, this will be executed
    healthAction.searchForClinic(clinic.Name); // remove this since after "use the call function when a clinic is clicked on map view" completes, this will be executed

    healthAction.clickOnClinic(clinic.Name);
    healthAction.clickOnDirectionsButtonOnDetailsPage(clinic.Directions);
    expect(healthAction.isDirectionPageDisplayed()).toBeTruthy(); // directions is displayed using google maps
    // add a script to go back to the mobile app (or) click the back button
  });

  // Story #65: Search functionality via Near Me on map view
  // QA Notes: not in scope, verifying the pins and clinics displayed
  it('search a clinic using Near Me on map view', () => {
    loginAs(validCredentials); // remove this since after "use the directions function when a clinic is clicked on map view" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "use the directions function when a clinic is clicked on map view" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "use the directions function when a clinic is clicked on map view" completes, this will be executed

    healthAction.clickOnSearchClinic();
    healthAction.clickOnNearByButton();
    expect(healthAction.isDefaultClinicDisplayed()).toBeFalsy();
  });

  // Story #67: Search functionality via Show all clinics on map view
  // QA Notes: not in scope, verifying the pins and clinics displayed
  it('search all clinics using Show all clinics on map view', () => {
    loginAs(validCredentials2); // remove this since after "search a clinic using Near Me on map view" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "search a clinic using Near Me on map view" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "search a clinic using Near Me on map view" completes, this will be executed

    healthAction.clickOnSearchClinic();
    healthAction.clickOnShowAllClinic();
    expect(healthAction.isDefaultClinicDisplayed()).toBeTruthy();
  });

  // Story #75: Search functionality via area on map view
  // QA Notes: not in scope, verifying the pins and clinics displayed
  it('search clinics via Area selected on map view', () => {
    loginAs(validCredentials2); // remove this since after "search all clinics using Show all clinics on map view" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "search all clinics using Show all clinics on map view" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "search all clinics using Show all clinics on map view" completes, this will be executed

    healthAction.clickOnSearchClinic();
    healthAction.clickOnAreasLabel();
    healthAction.clickOnFirstAreasInList(); // click on the first area in the list
    expect(healthAction.isClinicDisplayed()).toBeTruthy();
  });

  // Story #83: Search functionality via district on map view
  // QA Notes: not in scope, verifying the pins and clinics displayed
  it('search clinics via District selected on map view', () => {
    loginAs(validCredentials2); // remove this since after "search clinics via Area selected" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "search clinics via Area selected" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "search clinics via Area selected" completes, this will be executed

    healthAction.clickOnSearchClinic();
    healthAction.clickOnAreasLabel();
    healthAction.clickOnFirstDistrictInList();
    expect(healthAction.isClinicDisplayed()).toBeTruthy();
  });

  // Story #86: Story: Search functionality via input on map view
  // QA Notes: not in scope, verifying the pins and clinics displayed
  // it('search clinics via input entered on map view', () => {
  //   // add script here
  // });

  // Story #72: Search functionality via Near me on list view
  // QA Notes: not in scope, verifying the pins and clinics displayed
  it('search a clinic using Near Me on list view', () => {
    loginAs(validCredentials2); // remove this since after "search clinics via District selected" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "search clinics via District selected" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "search clinics via District selected" completes, this will be executed

    healthAction.clickOnListTab();
    healthAction.clickOnSearchClinic();
    healthAction.clickOnNearByButton();
    expect(healthAction.isNearMeOnListViewWorkFine()).toBeTruthy();
  });

  // Story #74: Search functionality via Show all clinics on list view
  // QA Notes: not in scope, verifying the pins and clinics displayed
  it('search a clinic using Show all clinics on list view', () => {
    loginAs(validCredentials2); // remove this since after "search a clinic using Near Me on list view" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "search a clinic using Near Me on list view" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "search a clinic using Near Me on list view" completes, this will be executed
    healthAction.clickOnListTab(); // remove this since after "search a clinic using Near Me on list view" completes, this will be executed

    healthAction.clickOnSearchClinic();
    healthAction.clickOnShowAllClinic();
    expect(healthAction.isClinicsFound()).toBeTruthy();
  });

  // Story #76: Search functionality via area on list view
  // QA Notes: not in scope, verifying the pins and clinics displayed
  it('search clinics via Area selected on list view', () => {
    loginAs(validCredentials2); // remove this since after "search a clinic using Show all clinics on list view" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "search a clinic using Show all clinics on list view" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "search a clinic using Show all clinics on list view" completes, this will be executed
    healthAction.clickOnListTab(); // remove this since after "search a clinic using Show all clinics on list view" completes, this will be executed

    healthAction.clickOnSearchClinic();
    healthAction.clickOnAreasLabel();
    healthAction.clickOnFirstAreasInList();
    expect(healthAction.isClinicsFound()).toBeTruthy(); // display record for Dr. Kwan Siu Kuen Billy
  });

  // Story #84: Search functionality via district on list view
  // QA Notes: not in scope, verifying the pins and clinics displayed
  it('search clinics via District selected on list view', () => {
    loginAs(validCredentials2); // remove this since after "search clinics via Area selected on list view" completes, this will be executed
    healthAction.clickSearchForClinicButton(); // remove this since after "search clinics via Area selected on list view" completes, this will be executed
    healthAction.allowAccessLocation(); // remove this since after "search clinics via Area selected on list view" completes, this will be executed
    healthAction.clickOnListTab(); // remove this since after "search clinics via Area selected on list view" completes, this will be executed

    healthAction.clickOnSearchClinic();
    healthAction.clickOnAreasLabel();
    healthAction.clickOnFirstDistrictInList();
    expect(healthAction.isClinicsFound()).toBeTruthy(); // display record for Dr. Kwan Siu Kuen Billy
  });

  // Story #87: Story: Search functionality via input on list view
  // QA Notes: not in scope, verifying the pins and clinics displayed
  // it('search clinics via input entered on list view', () => {
  //   // add script here
  // });

  // Story #37: View graphical risk score
  // QA Notes: not in scope, verifying the graphical risk score color
  it('view the graphical risk score', () => {
    const platform = getPlatform();

    if (platform === 'ios') {
      loginAs(sixGraph);

      expect(healthAction.isGraphicHistoryScoreDisplay()).toBeTruthy();
      const graphicRiskNumber = healthAction.getGraphicRiskNumber(); // remove this section, we are not just checking if the graphical risk score exists or not
      const actualHealthScoreBar = healthAction.getScoreOfLastBarOfGraphicRiskScore(); // remove this section, we are not just checking if the graphical risk score exists or not
      expect(actualHealthScoreBar).toBe(graphicRiskNumber); // remove this section, we are not just checking if the graphical risk score exists or not
    }
  });

  // Story #34: View panel search page - deny location access
  // QA Notes: This will always be tested last
  it('deny access of location but panel search page is still displayed on default view', () => {
    loginAs(validCredentials);
    healthAction.clickSearchForClinicButton();
    healthAction.denyAccessLocation(); // deny location access
    expect(healthAction.isHealthMapsPageDisplayed()).toBeTruthy(); // default map (HongKong) is displayed
  });
});
