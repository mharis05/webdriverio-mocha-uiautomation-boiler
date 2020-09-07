import Page from './page';
import SubCategoryProductComponent from './components/subcat_product_component'

class NopSubCategoryPage extends Page {

  get productItems() { return $$('.product-item'); }
  get categoryTitle() { return $('h1').getText(); }

  productComponent() { return new SubCategoryProductComponent(this.productItems[0]); }
  productTitle() { return this.productComponent().subCatProductTitle; }
  productPrice() { return this.productComponent().subCatProductPrice; }
  productAddToCartBtn() { return this.productComponent().subCatProductAddToCartButton; }
  productWishlistBtn() { return this.productComponent().subCatProductWishlistButton; }


  open(categoryName) {
    super.open(this.url + `${categoryName}`)
  }
}

export default new NopSubCategoryPage();