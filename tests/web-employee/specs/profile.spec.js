import { loginAs } from '../actions/login.action';
import { validCredentials } from '../../data/login.data';
import * as Me from '../../web-employee/actions/profile.action';

describe('Employee should,', function() {
  beforeAll(() => {
    loginAs(validCredentials);
  });

  // Me
  fit('be able to navigate to Me Page', function() {
    expect(Me.mePage()).toBeTruthy();
  });

  fit('be able to view eHealth', () => {
    expect(Me.eHealthCardVisibility()).toBeTruthy();
  });

  fit('be able to view benefits', () => {
    expect(Me.benefits()).toBeTruthy();
  });

  fit('be able to view Details Page', () => {
    expect(Me.details()).toBeTruthy();
  });

  fit('be able to view Useful Documents Page', () => {
    expect(Me.UsefulDocuments()).toBeTruthy();
  });

  fit('be able to view Help Page', () => {
    expect(Me.Helps()).toBeTruthy();
  });

  fit('be able to view Setting Page', () => {
    expect(Me.Settings()).toBeTruthy();
  });

  //e-Health card
  fit('be able to view virtual card', () => {
    expect(Me.virtualCards()).toBeTruthy();
  });

  fit('be able to verify Dependant not under "Tier III" will have a red card', () => {
    expect(Me.redCardVerification()).toBeTruthy();
  });

  //Benefit
  fit('be able to view Policy number', () => {
    expect(Me.Policy()).toBeTruthy();
  });

  fit('be able to view Insurer', () => {
    expect(Me.Insurer()).toBeTruthy();
  });

  fit('be able to view Effective Period', () => {
    expect(Me.EffectivePeriod()).toBeTruthy();
  });

  fit('be able to redirect to Benefit', () => {
    expect(Me.benefits()).toBeTruthy();
  });

  fit('be able to click on View For details', () => {
    expect(Me.ViewFor()).toBeTruthy();
  });

  fit('be able to verify tier details depending on the selection', () => {
    expect(Me.tier()).toBeTruthy();
  });

  fit('be able to view outpatient details', () => {
    expect(Me.outpatient()).toBeTruthy();
  });

  fit('be able to view Hospital and Surgical details', () => {
    expect(Me.HospitalAndSurgical()).toBeTruthy();
  });

  fit('be able to view Supplementary details', () => {
    expect(Me.Supplementary()).toBeTruthy();
  });

  fit('be able to view Maternity details', () => {
    expect(Me.Maternity()).toBeTruthy();
  });

  fit('be able to view Wellness details', () => {
    expect(Me.Wellness()).toBeTruthy();
  });
});