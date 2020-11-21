import LoginPage from "../../pageobjects/loginPage";
import ProfilePage from "../../pageobjects/profilePage";
import DiaryPage from "../../pageobjects/diaryPage";

import user from "../../../data/users";
import {topMenu, profilePage, diaryPage} from "../../../data/expected";

describe("VERIFY THAT PROFILE PAGE HAS DIARY ELEMENTS", () => {

  describe("VERIFY THAT PROFILE PAGE HAS DIARY ELEMENTS FOR ADMIN", () => {

    before(()=> {
      LoginPage.open();
      browser.maximizeWindow();
      browser.deleteAllCookies();
      LoginPage.login(user.admin.email, user.admin.password);
    })

    it("Verify that diary tab exist in the top menu", () => {
      ProfilePage.createReportBtn.waitForDisplayed();
      expect(ProfilePage.topMenuDiary.isDisplayed()).toEqual(true);
    });

    it("Verify that diary tab is clickable in the top menu", () => {
      ProfilePage.createReportBtn.waitForDisplayed();
      expect( ProfilePage.topMenuDiary.isClickable()).toEqual(true);
    });

    it("Verify that diary tab text = 'Diary' in the top menu", () => {
      ProfilePage.createReportBtn.waitForDisplayed();
      expect(ProfilePage.topMenuDiary.getText()).toEqual(topMenu.Diary);
    });

    it("Verify that diary tab in the top menu redirect to diary page", () => {
      ProfilePage.createReportBtn.waitForDisplayed();
      ProfilePage.topMenuDiary.click();
      expect(browser.getUrl()).toEqual(diaryPage.diaryUrl);
    });



    it("Verify that create day report button exist on profile page", () => {
      LoginPage.open();
      LoginPage.login(user.admin.email, user.admin.password);
      ProfilePage.createReportBtn.waitForDisplayed();
      expect( ProfilePage.createReportBtn.isDisplayed()).toEqual(true);
    });

    it("Verify that create day report button is clickable on profile page", () => {
      ProfilePage.createReportBtn.waitForDisplayed();
      expect( ProfilePage.createReportBtn.isClickable()).toEqual(true);
    });

    it("Verify that create day report button text = 'Create day report' on profile page", () => {
      ProfilePage.createReportBtn.waitForDisplayed();
      expect(ProfilePage.createReportBtn.getText()).toEqual(profilePage.createBtn);
    });

    it("Verify that label Daily reports  exist on profile page ", ()=> {
      expect (ProfilePage.dailyReportsLabel.isDisplayed()).toEqual(true)
    })

    it("Verify that label Daily reports text =  'Daily reports' on profile page ", ()=> {
      expect (ProfilePage.dailyReportsLabel.getText().includes(profilePage.dailyReportsLabelText)).toEqual(true);
    })

    it("Verify that label Daily reports counter exists on profile page ", ()=> {
      expect (ProfilePage.dailyReportsCounter.isDisplayed()).toEqual(true);
    })



  });
});
