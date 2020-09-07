export default class HeaderComponent {

  constructor(element) {
    this.element = element;
  }

  get headerCurrencySelect() { $("[name=customerCurrency]"); }
  get headerShoppingCart() { $("#topcartlink"); }
}