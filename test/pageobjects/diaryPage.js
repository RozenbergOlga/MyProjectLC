import BasePage from "./BasePage";

class DiaryPage extends BasePage {
  open() {
    super.open("/diary");
  }

  get createReportBtn() {
    return $(".ant-btn-primary");
  }
}

export default new DiaryPage();
