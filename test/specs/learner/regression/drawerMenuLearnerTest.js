
import ReportDrawerMenu from '../../../pageobjects/reportDrawer.menu';
import LoginPage from '../../../pageobjects/login.page';
import DiaryPage from '../../../pageobjects/login.page';
import user from '../../../../data/users.data';
import { topMenu, profilePage, diaryPage, digits, drawerMenu } from '../../../../data/expected.data';
import ProfilePage from '../../../pageobjects/profile.page';



describe('DRAWER MENU', () => {
    it('TC-5 Verify that Create day report subpage is appeared when click on the button Create day report on the user page profile', () => {
        LoginPage.open();
        browser.maximizeWindow();
        LoginPage.login(user.learner.email, user.learner.password);
        ProfilePage.createReportBtn.click();
        expect(ReportDrawerMenu.RDTitle.isDisplayed()).toEqual(true);
    })

    before(() => {
        LoginPage.open();
        browser.maximizeWindow();
        LoginPage.login(user.learner.email, user.learner.password);
        ProfilePage.createReportBtn.click();
    });

    if('TC-6.1 Verify that checkbox "Marks to your daily report" is present', () => {
        expect(ReportDrawerMenu.RDSubTitle.isDisplayed()).toEqual(true);
    });

    if('TC-6.2 Verify that checkbox "Marks to your daily report" has right title', () => {
        expect(ReportDrawerMenu.RDSubTitle.getText()).toEqual(drawerMenu.subTitle);
    });

    if('TC-7 Verify that checkbox "Marks to your daily report" has correct number of boxes = 12', () => {
        expect(ReportDrawerMenu.RDLCheckbox.length).toEqual(12);
    });

    if('TC-8.1 Verify that checkbox "Marks to your daily report" has correct title for box 1', () => {
        expect(ReportDrawerMenu.RDLINeedHelp.isDisplayed()).toEqual(true);
    });

    if('TC-8.2 Verify that checkbox "Marks to your daily report" has correct title for box 1', () => {
        expect(ReportDrawerMenu.RDLINeedHelp.getText()).toEqual(drawerMenu.iNeedHelp);
    });

    if('TC-8.3 Verify that checkbox "Marks to your daily report" has correct title for box 1', () => {
        expect(ReportDrawerMenu.RDLINeedHelpSubTXT.isDisplayed()).toEqual(true);
    });

    if('TC-8.4 Verify that checkbox "Marks to your daily report" has correct title for box 1', () => {
        expect(ReportDrawerMenu.RDLINeedHelpSubTXT.getText()).toEqual(drawerMenu.iNeedHelpSubTXT);
    });

    if('TC-9.1 Verify that checkbox "Marks to your daily report" has correct title for box 2', () => {
        expect(ReportDrawerMenu.RDLIUnderstoodEverything.isDisplayed()).toEqual(true);
    });

    if('TC-9.2 Verify that checkbox "Marks to your daily report" has correct title for box 2', () => {
        expect(ReportDrawerMenu.RDLIUnderstoodEverything.getText()).toEqual(drawerMenu.understood);
    });

    if('TC-9.3 Verify that checkbox "Marks to your daily report" has correct title for box 2', () => {
        expect(ReportDrawerMenu.RDLIUnderstoodEverythingSubTXT.isDisplayed()).toEqual(true);
    });

    if('TC-9.4 Verify that checkbox "Marks to your daily report" has correct title for box 2', () => {
        expect(ReportDrawerMenu.RDLIUnderstoodEverythingSubTXT.getText()).toEqual(drawerMenu.understoodSubTXT);
    });

    if('TC-10.1 Verify that checkbox "Marks to your daily report" has correct title for box 3', () => {
        expect(ReportDrawerMenu.RDLHelpedClassmates.isDisplayed()).toEqual(true);
    });

    if('TC-10.2 Verify that checkbox "Marks to your daily report" has correct title for box 3', () => {
        expect(ReportDrawerMenu.RDLHelpedClassmates.getText()).toEqual(drawerMenu.helped);
    });

    if('TC-10.3 Verify that checkbox "Marks to your daily report" has correct title for box 3', () => {
        expect(ReportDrawerMenu.RDLHelpedClassmatesSubTXT.isDisplayed()).toEqual(true);
    });

    if('TC-10.4 Verify that checkbox "Marks to your daily report" has correct title for box 3', () => {
        expect(ReportDrawerMenu.RDLHelpedClassmatesSubTXT.getText()).toEqual(drawerMenu.helpedSubTXT);
    });

    if('TC-11.1 Verify that checkbox "Marks to your daily report" has correct title for box 4', () => {
        expect(ReportDrawerMenu.RDLWatchedLectures.isDisplayed()).toEqual(true);
    });

    if('TC-11.2 Verify that checkbox "Marks to your daily report" has correct title for box 4', () => {
        expect(ReportDrawerMenu.RDLWatchedLectures.getText()).toEqual(drawerMenu.watched);
    });

    if('TC-12.1 Verify that checkbox "Marks to your daily report" has correct title for box 5', () => {
        expect(ReportDrawerMenu.RDLRead.isDisplayed()).toEqual(true);
    });

    if('TC-12.2 Verify that checkbox "Marks to your daily report" has correct title for box 5', () => {
        expect(ReportDrawerMenu.RDLRead.getText()).toEqual(drawerMenu.read);
    });

    if('TC-13.1 Verify that checkbox "Marks to your daily report" has correct title for box 6', () => {
        expect(ReportDrawerMenu.RDLCode.isDisplayed()).toEqual(true);
    });

    if('TC-13.2 Verify that checkbox "Marks to your daily report" has correct title for box 6', () => {
        expect(ReportDrawerMenu.RDLCode.getText()).toEqual(drawerMenu.code);
    });

    if('TC-14.1 Verify that checkbox "Marks to your daily report" has correct title for box 7', () => {
        expect(ReportDrawerMenu.RDLQuiz.isDisplayed()).toEqual(true);
    });

    if('TC-14.2 Verify that checkbox "Marks to your daily report" has correct title for box 7', () => {
        expect(ReportDrawerMenu.RDLQuiz.getText()).toEqual(drawerMenu.quiz);
    });

    if('TC-15.1 Verify that checkbox "Marks to your daily report" has correct title for box 8', () => {
        expect(ReportDrawerMenu.RDLInterviewPrep.isDisplayed()).toEqual(true);
    });

    if('TC-15.2 Verify that checkbox "Marks to your daily report" has correct title for box 8', () => {
        expect(ReportDrawerMenu.RDLInterviewPrep.getText()).toEqual(drawerMenu.interviewPrep);
    });

    if('TC-16.1 Verify that checkbox "Marks to your daily report" has correct title for box 9', () => {
        expect(ReportDrawerMenu.RDLRecruiter.isDisplayed()).toEqual(true);
    });

    if('TC-16.2 Verify that checkbox "Marks to your daily report" has correct title for box 9', () => {
        expect(ReportDrawerMenu.RDLRecruiter.getText()).toEqual(drawerMenu.recruiter);
    });

    if('TC-17.1 Verify that checkbox "Marks to your daily report" has correct title for box 10', () => {
        expect(ReportDrawerMenu.RDLInterviewTech.isDisplayed()).toEqual(true);
    });

    if('TC-17.2 Verify that checkbox "Marks to your daily report" has correct title for box 10', () => {
        expect(ReportDrawerMenu.RDLInterviewTech.getText()).toEqual(drawerMenu.interviewTech);
    });

    if('TC-18.1 Verify that checkbox "Marks to your daily report" has correct title for box 11', () => {
        expect(ReportDrawerMenu.RDLInterviewOnsite.isDisplayed()).toEqual(true);
    });

    if('TC-18.2 Verify that checkbox "Marks to your daily report" has correct title for box 11', () => {
        expect(ReportDrawerMenu.RDLInterviewOnsite.getText()).toEqual(drawerMenu.interviewOnsite);
    });

    if('TC-19.1 Verify that checkbox "Marks to your daily report" has correct title for box 12', () => {
        expect(ReportDrawerMenu.RDLJobOffer.isDisplayed()).toEqual(true);
    });

    if('TC-19.2 Verify that checkbox "Marks to your daily report" has correct title for box 12', () => {
        expect(ReportDrawerMenu.RDLJobOffer.getText()).toEqual(drawerMenu.jobOffer);
    });

    if('TC-20 Verify that user could choose any one box of "Marks to your daily report"', () => {
        expect(ReportDrawerMenu.RDLCheckbox.forEach().isClickable()).toEqual(true);
    });

    if('TC-21 Verify that user could choose several (2-11) boxes of "Marks to your daily report"', () => {
        for (let i = 0; i <= ReportDrawerMenu.RandomCheckbox(0, 11); i++) {

          

                 ReportDrawerMenu.Checkbox[ReportDrawerMenu.RandomCheckbox(0, 11)].click();

        }
    });

    if('TC-22 Verify that user could choose all boxes of "Marks to your daily report"', () => {
        const links = ReportDrawerMenu.Checkbox;


            links.forEach((el) => {
                el.click()
            });

    });

    if('TC-23.1 Verify that field "What is your morale?" present and has a correct text inside', () => {
        expect(ReportDrawerMenu.RDCBMorale.isDisplayed()).toEqual(true);
    });

    if('TC-23.2 Verify that field "What is your morale?" present and has a correct text inside', () => {
        expect(ReportDrawerMenu.RDCBMorale.getText()).toEqual(drawerMenu.checkboxMoraleText);
    });

    if('TC-24.1 Verify that field "What is your morale?" has correct added text below field', () => {
        expect(ReportDrawerMenu.RDCBMoraleSubTXT.isDisplayed()).toEqual(true);
    });

    if('TC-24.2 Verify that field "What is your morale?" has correct added text below field', () => {
        expect(ReportDrawerMenu.RDCBMoraleSubTXT.getText()).toEqual(drawerMenu.checkboxMoraleSubText);
    });

    if('TC-25 Verify that field "What is your morale?" has correct added text below field', () => {
        expect(ReportDrawerMenu.RDCBMorale.isClickable()).toEqual(true);
    });

    if('TC-26 Verify that appeared checkbox has value from 0 to 10 when you click om the field "What is your morale?"', () => {
        expect(ReportDrawerMenu.RDMoraleDropDownMenu.length).toEqual(10); // need 11
    });

    xif('TC-27 Verify that scrolling works inside checkbox for the field "What is your morale?"', () => {

    });

    if('TC-28 Verify that appeared checkbox has correct text for value 10 when you click om the field "What is your morale?"', () => {

    });









})