import nopHomePage from '../pages/nop-home.page';
import NopSubCategoryPage from '../pages/nop.subcat.page'
var expect = require('chai').expect


describe('Home Page Suite', function () {

  // afterEach(function () {
  //   browser.reloadSession()
  // });

  it(`Validate that the products info on the subcategory page contains the following: 
      Title,
      Price,
      Add to Cart button
      Favorite button`, function () {
    NopSubCategoryPage.open("desktops");
    expect(NopSubCategoryPage.productTitle()).to.eql("Build your own computer");
    expect(NopSubCategoryPage.productPrice()).to.eql(1200.00);
    expect(NopSubCategoryPage.productAddToCartBtn().isEnabled()).to.be.true;
    expect(NopSubCategoryPage.productWishlistBtn().isEnabled()).to.be.true;
  });

  it('Validate that a sub-category can be opened by selecting it from category menu', function () {
    nopHomePage.open();
    nopHomePage.selectDesktopItem();
    expect(NopSubCategoryPage.categoryTitle).to.eql('Desktops');
  });



});