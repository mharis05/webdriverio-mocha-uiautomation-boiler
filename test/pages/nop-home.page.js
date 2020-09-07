import Page from './page';


/*
Following stuff is interesting: 
  If we decide to use `export default class NopHomePage` in nop.home.page module and do NOT export 
  the object reference like this: 
    export default new NopHomePage();
  Then we can initialize the page object in the spec with the following line:
  let nopHomePage = new NopHomePage();
*/

class NopHomePage extends Page {
    get desktopItem() { return $(".top-menu.notmobile > li:nth-of-type(1) ul > li:nth-of-type(1) a"); }
    get computersTab() { return $(".top-menu.notmobile > li:nth-child(1) > a") }

    selectDesktopItem() {
        this.computersTab.moveTo();
        this.desktopItem.click();
    }

    open() {
        super.open(this.url);
        return this;
    }
}

export default new NopHomePage();