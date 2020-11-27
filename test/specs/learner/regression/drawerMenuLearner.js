
import LoginPage from '../../../pageobjects/login.page';
import ProfilePage from '../../../pageobjects/profile.page';
import user from '../../../../data/users.data';
import {topMenu, profilePage, diaryPage, drawerMenu } from '../../../../data/expected.data';
import ReportDrawerMenu from '../../../pageobjects/reportDrawer.menu';


describe('REPORT DRAWER MENU FOR LEARNER', () => {
    before (() => {
        LoginPage.open();
        browser.maximizeWindow();
        LoginPage(user.learner.email, user.learner.password);
        ProfilePage.createReportBtn.click();
    });

    describe('VERIFY THAT, FOR LEARNER, ALL ELEMENTS ARE PRESENT AND CORRECT FOR DRAWER MENU', () => {
        it('Verify that, for learner, menu title is present for Drawer menu', () => {
            expect(ReportDrawerMenu.RDTitle.isDisplayed()).toEqual(true);
        })
    })
})