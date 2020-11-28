class ReportDrawerMenu {
    //RDL = Report Drawer Label
    get RDTitle() {
        return $('.ant-drawer-title');
    }

    get RDSubTitle() {
        return $('h6');
    }

    get RDLINeedHelp() {
        return $$('.ant-checkbox-wrapper')[0];
    }

    get RDLINeedHelpSubTXT() {
        return $$('.text-secondary')[0];
    }

    get RDLIUnderstoodEverything() {
        return $$('.ant-checkbox-wrapper')[1];
    }

    get RDLIUnderstoodEverythingSubTXT() {
        return $$('.text-secondary')[1];
    }

    get RDLHelpedClassmates() {
        return $$('.ant-checkbox-wrapper')[2];
    }

    get RDLHelpedClassmatesSubTXT() {
        return $$('.text-secondary')[2];
    }

    get RDLWatchedLectures() {
        return $$('.ant-checkbox-wrapper')[3];
    }

    get RDLRead() {
        return $$('.ant-checkbox-wrapper')[4];
    }

    get RDLCode() {
        return $$('.ant-checkbox-wrapper')[5];
    }

    get RDLQuiz() {
        return $$('.ant-checkbox-wrapper')[6];
    }

    get RDLInterviewPrep() {
        return $$('.ant-checkbox-wrapper')[7];
    }

    get RDLRecruiter() {
        return $$('.ant-checkbox-wrapper')[8];
    }

    get RDLInterviewTech() {
        return $$('.ant-checkbox-wrapper')[9];
    }

    get RDLInterviewOnsite() {
        return $$('.ant-checkbox-wrapper')[10];
    }

    get RDLJobOffer() {
        return $$('.ant-checkbox-wrapper')[11];
    }




    get RDLINeedHelpCB() {
        return $$('.ant-checkbox')[0];
    }

    get RDLIUnderstoodEverythingCB() {
        return $$('.ant-checkbox')[1];
    }

    get RDLHelpedClassmatesCB() {
        return $$('.ant-checkbox')[2];
    }

    get RDLWatchedLecturesCB() {
        return $$('.ant-checkbox')[3];
    }

    get RDLReadCB() {
        return $$('.ant-checkbox')[4];
    }

    get RDLCodeCB() {
        return $$('.ant-checkbox')[5];
    }

    get RDLQuizCB() {
        return $$('.ant-checkbox')[6];
    }

    get RDLInterviewPrepCB() {
        return $$('.ant-checkbox')[7];
    }

    get RDLRecruiterCB() {
        return $$('.ant-checkbox')[8];
    }

    get RDLInterviewTechCB() {
        return $$('.ant-checkbox')[9];
    }

    get RDLInterviewOnsiteCB() {
        return $$('.ant-checkbox')[10];
    }

    get RDLJobOfferCB() {
        return $$('.ant-checkbox')[11];
    }

    get RDCBMorale() {
        return $$('.ant-select-selector')[0];
    }

    get RDCBMoraleSubTXT() {
        return $$('.ant-form-item-extra')[0];
    }


}

export default new ReportDrawerMenu();
