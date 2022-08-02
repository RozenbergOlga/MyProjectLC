import LoginPage from '../../../pageobjects/login.page';
import user from '../../../../data/users.data';
import ProfilePage from '../../../pageobjects/profile.page';
import { profilePage, diaryPage, digits } from '../../../../data/expected.data';
import DiaryPage from '../../../pageobjects/diary.page';

describe('VERIFY THAT DIARY PAGE FOR LEARNER', () => {
  before(() => {
    LoginPage.open();
    browser.maximizeWindow();
    browser.deleteAllCookies();
    LoginPage.login(user.learner.email, user.learner.password);
    ProfilePage.createReportBtn.waitForDisplayed();
    ProfilePage.topMenuDiaryLearner.click();
  });

  describe('VERIFY THAT THE MAIN ELEMENTS ARE PRESENT ON THE PAGE FOR LEARNER', function () {
    it('Verify that url for Dairy page is https://stage.localcoding.us/diary', function () {
      expect(browser.getUrl()).toEqual(diaryPage.diaryUrl);
    });

    it('Verify that the header is present and has text "Daily reports"', function () {
      expect(DiaryPage.headerDiaryPage.getText()).toEqual(diaryPage.header);
    });

    it('Verify that the field "Total Diaries" are present', function () {
      expect(DiaryPage.statTotalDiaries.getText()).toEqual(diaryPage.statTotalDiaries);
    });

    it('Verify that the field "Total Diaries" has a quantity', function () {
      expect(DiaryPage.statTotalDiariesCount.isDisplayed()).toEqual(true);
    });

    it('Verify that the field "Total Diaries" has a quantity (and not equal zero)', function () {
      expect(DiaryPage.statTotalDiariesCount.getValue()).not.toEqual(digits.zero);
    });

    it('Verify that the field "Today Daily Reports" are present', function () {
      expect(DiaryPage.statTodayDailyReport.getText()).toEqual(diaryPage.statTodayDailyReport);
    });

    it('Verify that the field "Today Daily Reports" has a quantity', function () {
      expect(DiaryPage.statTodayDailyReportCount.isDisplayed()).toEqual(true);
    });

    it('Verify that the field "Today Daily Reports" has a quantity (and not equal zero)', function () {
      expect(DiaryPage.statTodayDailyReportCount.getValue()).not.toEqual(digits.zero);
    });

    it('Verify that the field "Total Hours Spent" are present', function () {
      expect(DiaryPage.statTotalHoursSpent.getText()).toEqual(diaryPage.statTotalHoursSpent);
    });

    it('Verify that the field "Total Hours Spent" has a quantity', function () {
      expect(DiaryPage.statTotalHoursSpentCount.isDisplayed()).toEqual(true);
    });

    it('Verify that the field "Total Hours Spent" has a quantity (and not equal zero)', function () {
      expect(DiaryPage.statTodayDailyReportCount.getValue()).not.toEqual(digits.zero);
    });

    it('Verify that the field "Average Morale Level" are present', function () {
      expect(DiaryPage.statTotalHoursSpent.getText()).toEqual(diaryPage.statTotalHoursSpent);
    });

    it('Verify that the field "Average Morale Level" has a quantity', function () {
      expect(DiaryPage.statTotalHoursSpentCount.isDisplayed()).toEqual(true);
    });

    it('Verify that the field "Average Morale Level" has a quantity (and not equal zero)', function () {
      expect(DiaryPage.statTodayDailyReportCount.getValue()).not.toEqual(digits.zero);
    });

    it('Verify that the button "Create day report" is present on the page', () => {
        expect(DiaryPage.createReportBtnDairyPage.isDisplayed()).toEqual(true);
      });

    it('Verify that the button "Create day report" text = "Create day report"', () => {
      expect(DiaryPage.createReportBtnDairyPage.getText()).toEqual(profilePage.createBtn);
    });

    it('Verify that the button "Create day report" is clickable on the page', () => {
      expect(DiaryPage.createReportBtnDairyPage.isClickable()).toEqual(true);
    });

    it('Verify that Dairy page has ten reports', () => {
      expect(DiaryPage.numberReportsOnPage.length).toEqual(digits.ten);
    });

    it('Verify that the last report becomes the first', () => {
      expect(DiaryPage.sortedDiaryReportsByTime()).toEqual(true);

    });

  });

});
