export class CartItem {
  constructor(
    id,
    name,
    alias,
    price,
    description,
    shortDescription,
    quantity,
    image,
    cartQty
  ) {
    this.id = id;
    this.name = name;
    this.alias = alias;
    this.price = price;
    this.description = description;
    this.shortDescription = shortDescription;
    this.quantity = quantity;
    this.image = image;
    this.cartQty = cartQty;
  }
  totalPrice = function () {
    return this.price * this.cartQty;
  };
}
