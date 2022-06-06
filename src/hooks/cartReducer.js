export default function CartReducer(cart, Action) {
  const { id, sku, quantity } = Action;
  switch (Action.type) {
    case "emptyCart":
      return [];
    case "add":
      const itemInCart = cart.find((item) => item.sku === sku);

      if (itemInCart) {
        return cart.map((item) =>
          cart.sku === sku ? { ...cart, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...cart, { id, sku, quantity: 1 }];
      }
    case "update":
      return quantity === 0
        ? cart.filter((i) => i.sku !== sku)
        : cart.map((i) => (i.sku === sku ? { ...i, quantity } : i));
    default:
      throw new Error();
  }
}
