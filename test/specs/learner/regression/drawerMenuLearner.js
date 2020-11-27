
import LoginPage from '../../../pageobjects/login.page';
import ProfilePage from '../../../pageobjects/profile.page';
import user from '../../../../data/users.data';
import {topMenu, profilePage, diaryPage, drawerMenu } from '../../../../data/expected.data';
import ReportDrawerMenu from '../../../pageobjects/reportDrawer.menu';


describe('REPORT DRAWER MENU FOR LEARNER', () => {
    before(() => {
         LoginPage.open();
         browser.maximizeWindow();
         LoginPage.login(user.admin.email, user.admin.password);
         ProfilePage.createReportBtn.click();
     });

    describe('VERIFY THAT, FOR LEARNER, ALL ELEMENTS ARE PRESENT AND CORRECT FOR DRAWER MENU', () => {
        it('Verify that, for learner, menu title is present  for Drawer menu', () => {
            expect(ReportDrawerMenu.RDTitle.isDisplayed()).toEqual(true);
        })

        it('Verify that, for learner, menu title = "Create day report" for Drawer menu', () => {
            expect(ReportDrawerMenu.RDTitle.getText()).toEqual(drawerMenu.title);
        });

        it('Verify that, for learner, menu sub title is present  for Drawer menu', () => {
            expect(ReportDrawerMenu.RDSubTitle.isDisplayed()).toEqual(true);
        })

        it('Verify that, for learner, menu sub title = "Marks to your daily report" for Drawer menu', () => {
            expect(ReportDrawerMenu.RDSubTitle.getText()).toEqual(drawerMenu.subTitle);
        });

        it("Verify that, for learner, menu sub title label 1 'I need help' is present", () => {
            expect(ReportDrawerMenu.RDLINeedHelp.isDisplayed()).toEqual(true);
         });

        it("Verify that, for learner, menu sub title label 1 text = 'I need help'", () => {
            expect(ReportDrawerMenu.RDLINeedHelp.getText().includes(drawerMenu.iNeedHelp)).toEqual(true);
        });

        it("Verify that, for learner, menu sub title label 1 'I need help' sub text is present", () => {
            expect(ReportDrawerMenu.RDLINeedHelpSubTXT.isDisplayed()).toEqual(true);
         });

        it("Verify that, for learner, menu sub title label 1 'I need help' sub text is correct", () => {
            expect(ReportDrawerMenu.RDLINeedHelpSubTXT.getText()).toEqual(drawerMenu.iNeedHelpSubTXT);
         });


    });
});