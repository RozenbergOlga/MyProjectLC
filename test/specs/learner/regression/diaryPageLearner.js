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

  describe('VERIFY THAT THE MAIN ELEMENTS ARE PRESENT ON THE PAGE', function () {
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

    xit('Verify that the field "Today Daily Reports" has a quantity (and not equal zero)', function () {
      expect(DiaryPage.statTodayDailyReportCount.getValue()).toEqual(digits.zero);
    });
  });
});
