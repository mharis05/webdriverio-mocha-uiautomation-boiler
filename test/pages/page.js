export default class Page {
  constructor() {
    this.title = 'my Page';
    this.url = "https://demo.nopcommerce.com/";
  }

  open(path) {
    browser.url(path);
    return this;
  }

  verifyTextInPage(text) {
    const pageText = $('body').getText();
    const position = pageText.search(text);
    chai.expect(position).to.be.above(0);
  }
}
