export default class SubCategoryProductComponent {
  constructor(element) {
    this.element = element;
  }

  get subCatProductTitle() { return this.element.$('.product-title > a').getText(); }
  get subCatProductPrice() { return Number(this.element.$('.actual-price').getText().replace(/[^\d.-]/g, '')); }
  get subCatProductAddToCartButton() { return this.element.$('.product-box-add-to-cart-button'); }
  get subCatProductWishlistButton() { return this.element.$('.add-to-wishlist-button'); }
}