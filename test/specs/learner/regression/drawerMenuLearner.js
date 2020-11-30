
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
        // it('Verify that, for learner, menu title is present  for Drawer menu', () => {
        //     expect(ReportDrawerMenu.RDTitle.isDisplayed()).toEqual(true);
        // })
        //
        // it('Verify that, for learner, menu title = "Create day report" for Drawer menu', () => {
        //     expect(ReportDrawerMenu.RDTitle.getText()).toEqual(drawerMenu.title);
        // });
        //
        // it('Verify that, for learner, menu sub title is present  for Drawer menu', () => {
        //     expect(ReportDrawerMenu.RDSubTitle.isDisplayed()).toEqual(true);
        // })
        //
        // it('Verify that, for learner, menu sub title = "Marks to your daily report" for Drawer menu', () => {
        //     expect(ReportDrawerMenu.RDSubTitle.getText()).toEqual(drawerMenu.subTitle);
        // });
        //
        //
        // it("Verify that, for learner, menu sub title label 1 'I need help' is present", () => {
        //     expect(ReportDrawerMenu.RDLINeedHelp.isDisplayed()).toEqual(true);
        //  });
        //
        // it("Verify that, for learner, menu sub title label 1 text = 'I need help'", () => {
        //     expect(ReportDrawerMenu.RDLINeedHelp.getText().includes(drawerMenu.iNeedHelp)).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 1 'I need help' sub text is present", () => {
        //     expect(ReportDrawerMenu.RDLINeedHelpSubTXT.isDisplayed()).toEqual(true);
        //  });
        //
        // it("Verify that, for learner, menu sub title label 1 'I need help' sub text is correct", () => {
        //     expect(ReportDrawerMenu.RDLINeedHelpSubTXT.getText()).toEqual(drawerMenu.iNeedHelpSubTXT);
        //  });
        //
        // it("Verify that, for learner, menu sub title label 1 'I need help' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLINeedHelpCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 1 'I need help' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLINeedHelpCB.isClickable()).toEqual(true);
        // });
        //
        //
        //
        //
        //
        //
        // it("Verify that, for learner, menu sub title label 2 'I understood everything' is present", () => {
        //     expect(ReportDrawerMenu.RDLIUnderstoodEverything.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 2 text = 'I understood everything'", () => {
        //     expect(ReportDrawerMenu.RDLIUnderstoodEverything.getText().includes(drawerMenu.understoodSubTXT)).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 2 'I understood everything' sub text is present", () => {
        //     expect(ReportDrawerMenu.RDLIUnderstoodEverythingSubTXT.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 2 'I understood everything' sub text is correct", () => {
        //     expect(ReportDrawerMenu.RDLIUnderstoodEverythingSubTXT.getText()).toEqual(drawerMenu.understoodSubTXT);
        // });
        //
        // it("Verify that, for learner, menu sub title label 2 'I understood everything' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLIUnderstoodEverythingCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 2 'I understood everything' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLIUnderstoodEverythingCB.isClickable()).toEqual(true);
        // });
        //
        //
        //
        // it("Verify that, for learner, menu sub title label 3 'Helped classmates' is present", () => {
        //     expect(ReportDrawerMenu.RDLHelpedClassmates.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 3 text = 'Helped classmates'", () => {
        //     expect(ReportDrawerMenu.RDLHelpedClassmates.getText().includes(drawerMenu.helped)).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 3 'Helped classmates' sub text is present", () => {
        //     expect(ReportDrawerMenu.RDLHelpedClassmatesSubTXT.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 3 'Helped classmates' sub text is correct", () => {
        //     expect(ReportDrawerMenu.RDLHelpedClassmatesSubTXT.getText()).toEqual(drawerMenu.helpedSubTXT);
        // });
        //
        // it("Verify that, for learner, menu sub title label 3 'Helped classmates' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLHelpedClassmatesCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 3 'Helped classmates' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLHelpedClassmatesCB.isClickable()).toEqual(true);
        // });
        //
        //
        //
        // it("Verify that, for learner, menu sub title label 4 'Watched lectures' is present", () => {
        //     expect(ReportDrawerMenu.RDLWatchedLectures.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 4 text = 'Watched lectures'", () => {
        //     expect(ReportDrawerMenu.RDLWatchedLectures.getText()).toEqual(drawerMenu.watched);
        // });
        //
        // it("Verify that, for learner, menu sub title label 4 'Watched lectures' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLWatchedLecturesCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 4 'Watched lectures' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLWatchedLecturesCB.isClickable()).toEqual(true);
        // });
        //
        //
        //
        // it("Verify that, for learner, menu sub title label 5 'Read documentation' is present", () => {
        //     expect(ReportDrawerMenu.RDLRead.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 5 text = 'Read documentation'", () => {
        //     expect(ReportDrawerMenu.RDLRead.getText()).toEqual(drawerMenu.read);
        // });
        //
        // it("Verify that, for learner, menu sub title label 5 'Read documentation' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLReadCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 5 'Read documentation' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLReadCB.isClickable()).toEqual(true);
        // });
        //
        //
        //
        // it("Verify that, for learner, menu sub title label 6 'Code practice' is present", () => {
        //     expect(ReportDrawerMenu.RDLCode.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 6 text = 'Code practice'", () => {
        //     expect(ReportDrawerMenu.RDLCode.getText()).toEqual(drawerMenu.code);
        // });
        //
        // it("Verify that, for learner, menu sub title label 6 'Code practice' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLCodeCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 6 'Code practice' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLCodeCB.isClickable()).toEqual(true);
        // });
        //
        //
        //
        // it("Verify that, for learner, menu sub title label 7 'Quiz practice' is present", () => {
        //     expect(ReportDrawerMenu.RDLQuiz.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 7 text = 'Quiz practice'", () => {
        //     expect(ReportDrawerMenu.RDLQuiz.getText()).toEqual(drawerMenu.quiz);
        // });
        //
        // it("Verify that, for learner, menu sub title label 7 'Quiz practice' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLQuizCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 7 'Quiz practice' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLQuizCB.isClickable()).toEqual(true);
        // });
        //
        //
        //
        // it("Verify that, for learner, menu sub title label 8 'Interview preparation' is present", () => {
        //     expect(ReportDrawerMenu.RDLInterviewPrep.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 8 text = 'Interview preparation'", () => {
        //     expect(ReportDrawerMenu.RDLInterviewPrep.getText()).toEqual(drawerMenu.interviewPrep);
        // });
        //
        // it("Verify that, for learner, menu sub title label 8 'Interview preparation' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLInterviewPrepCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 8 'Interview preparation' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLInterviewPrepCB.isClickable()).toEqual(true);
        // });
        //
        //
        //
        // it("Verify that, for learner, menu sub title label 9 'Recruiter phone call' is present", () => {
        //     expect(ReportDrawerMenu.RDLRecruiter.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 9 text = 'Recruiter phone call'", () => {
        //     expect(ReportDrawerMenu.RDLRecruiter.getText()).toEqual(drawerMenu.recruiter);
        // });
        //
        // it("Verify that, for learner, menu sub title label 9 'Recruiter phone call' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLRecruiterCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 9 'Recruiter phone call' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLRecruiterCB.isClickable()).toEqual(true);
        // });
        //
        //
        //
        // it("Verify that, for learner, menu sub title label 10 'Interview technical screen' is present", () => {
        //     expect(ReportDrawerMenu.RDLInterviewTech.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 10 text = 'Interview technical screen'", () => {
        //     expect(ReportDrawerMenu.RDLInterviewTech.getText()).toEqual(drawerMenu.interviewTech);
        // });
        //
        // it("Verify that, for learner, menu sub title label 10 'Interview technical screen' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLInterviewTechCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 10 'Interview technical screen' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLInterviewTechCB.isClickable()).toEqual(true);
        // });
        //
        //
        //
        // it("Verify that, for learner, menu sub title label 11 'Interview onsite' is present", () => {
        //     expect(ReportDrawerMenu.RDLInterviewOnsite.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 11 text = 'Interview onsite'", () => {
        //     expect(ReportDrawerMenu.RDLInterviewOnsite.getText()).toEqual(drawerMenu.interviewOnsite);
        // });
        //
        // it("Verify that, for learner, menu sub title label 11 'Interview onsite' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLInterviewOnsiteCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 11 'Interview onsite' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLInterviewOnsiteCB.isClickable()).toEqual(true);
        // });
        //
        //
        //
        // it("Verify that, for learner, menu sub title label 12 'Got a job offer' is present", () => {
        //     expect(ReportDrawerMenu.RDLJobOffer.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 12 text = 'Got a job offer'", () => {
        //     expect(ReportDrawerMenu.RDLJobOffer.getText()).toEqual(drawerMenu.jobOffer);
        // });
        //
        // it("Verify that, for learner, menu sub title label 12 'Got a job offer' checkbox is present", () => {
        //     expect(ReportDrawerMenu.RDLJobOfferCB.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, menu sub title label 12 'Got a job offer' checkbox is clickable", () => {
        //     expect(ReportDrawerMenu.RDLJobOfferCB.isClickable()).toEqual(true);
        // });
        //
        //
        // it("Verify that, for learner, checkbox morale is present", () => {
        //     expect(ReportDrawerMenu.RDCBMorale.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, checkbox morale text = 'What is your morale?'", () => {
        //     expect(ReportDrawerMenu.RDCBMorale.getText()).toEqual(drawerMenu.checkboxMoraleText);
        // });
        //
        // it("Verify that, for learner, checkbox morale subtext is present", () => {
        //     expect(ReportDrawerMenu.RDCBMoraleSubTXT.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, checkbox morale subtext = 'From 0 to 10'", () => {
        //     expect(ReportDrawerMenu.RDCBMoraleSubTXT.getText()).toEqual(drawerMenu.checkboxMoraleSubText);
        // });
        //
        //
        // it("Verify that, for learner, checkbox hours is present", () => {
        //     expect(ReportDrawerMenu.RDCBHours.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, checkbox hours text is correct", () => {
        //     expect(ReportDrawerMenu.RDCBHours.getText()).toEqual(drawerMenu.checkboxHoursText);
        // });
        //
        // it("Verify that, for learner, checkbox hours subtext is present", () => {
        //     expect(ReportDrawerMenu.RDCBHoursSubTXT.isDisplayed()).toEqual(true);
        // });
        //
        // it("Verify that, for learner, checkbox hours subtext = 'From 0 to 10'", () => {
        //     expect(ReportDrawerMenu.RDCBHoursSubTXT.getText()).toEqual(drawerMenu.checkboxHoursSubText);
        // });
        //
        //
        // it("Verify that, for learner, checkbox day is present", () => {
        //      expect(ReportDrawerMenu.RDCBDay.isDisplayed()).toEqual(true);
        //  });
        //
        //  // it("Verify that, for learner, checkbox day text is correct", () => {
        //  //    expect(ReportDrawerMenu.RDCBDay.getText().includes(drawerMenu.checkboxDayText)).toEqual(true);
        //  // });
        //
        //  it("Verify that, for learner, checkbox day subtext is present", () => {
        //     expect(ReportDrawerMenu.RDCBDaySubTXT.isDisplayed()).toEqual(true);
        //  });
        //
        //  it("Verify that, for learner, checkbox day subtext is correct", () => {
        //      expect(ReportDrawerMenu.RDCBDaySubTXT.getText()).toEqual(drawerMenu.checkboxDaySubText);
        //  });
        //
        // it("Verify that, for learner, Create Button  is clickable on the page", () => {
        //     expect(ReportDrawerMenu.RDCreateButton.isClickable()).toEqual(true);
        // });
        //
        //
        //
        // it('put a check on the checkbox', () => {
        //     const links = $$('.ant-checkbox')
        //     links.forEach((link) => {
         //       link.click()
       //     })
      //  })



        it('Verify we can put Random check on the checkbox', () => {
            for (let i = 0; i <= ReportDrawerMenu.RandomCheckbox(0, 11); i++) {
                ReportDrawerMenu.Checkbox[ReportDrawerMenu.RandomCheckbox(0, 11)].click()
            }
        });


        it('Verify we can select Random Morale', () => {
            ReportDrawerMenu.RDCBMorale.click();
            ReportDrawerMenu.RDMoraleDropDownMenu[ReportDrawerMenu.RandomCheckbox(0, 9)].click();
            browser.pause(5000)
        })



        it('Verify we can select Random Hours', () => {
            ReportDrawerMenu.RDCBHours.click();
            ReportDrawerMenu.RDHoursDropDownMenu[ReportDrawerMenu.RandomCheckbox(10, 17)].click();
            browser.pause(3000)
        })



        it(' TC41 Verify that you can input 30 characters in the field "How was your day?"', () => {
            ReportDrawerMenu.RDCBDay.click();
            let string30 = '';
            for (let i = 0; i <= 31; i++) {
                string30 += String.fromCharCode(ReportDrawerMenu.RandomCheckbox(31, 300));
            }
            ReportDrawerMenu.RDCBDay.addValue(string30);
            const text = ReportDrawerMenu.RDCBDay.getValue();
            expect(text.length).toEqual(string30.length);
        })

        it(' TC42 Verify that you could input 300 characters in the field "How was your day?"', () => {
            ReportDrawerMenu.RDCBDay.click();
            let string300 = '';
            for (let i = 0; i <=301; i++) {
                string300 += String.fromCharCode(ReportDrawerMenu.RandomCheckbox(31, 300));
            }
            ReportDrawerMenu.RDCBDay.setValue(string300);
            const text = ReportDrawerMenu.RDCBDay.getValue();
            expect(text.length).toEqual(string300.length);
        })

        it('TC43 Verify that you could not input 29 characters in the field "How was your day?"', () => {

            ReportDrawerMenu.RDCBDay.click();
            let string29 = '';
            for (let i = 0; i < 29; i++) {
                string29 += String.fromCharCode(ReportDrawerMenu.RandomCheckbox(32, 120));
            }
            ReportDrawerMenu.RDCBDay.setValue(string29);
            expect(ReportDrawerMenu.DayAlertText.isDisplayed()).toEqual(true);
        })

       // it('TC44 Verify that you could not use copy past for inputing uncorrect numbers of characters ' +
          //  '(less then 30) in the field "How was your day?"', () => {
            // ReportDrawerMenu.RDDayField.click();
            // let stringLess = '';
            // for (let i = 1; i <= ReportDrawerMenu.RandomCheckbox(1, 29); i++) {
            //   stringLess += String.fromCharCode(ReportDrawerMenu.RandomCheckbox(32, 120));
            // }
            // ReportDrawerMenu.RDDayField.setValue(stringLess);
            // expect(ReportDrawerMenu.DayAlertText.isDisplayed()).toEqual(true);
        //})
    });




});
