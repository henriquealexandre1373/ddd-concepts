import OrderItem from "../entity/order-item";

export default class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[] = [];
  private _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;

    this.validate();

    this._total = this.calculateTotal();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }

    if (this._customerId.length === 0) {
      throw new Error("CustomerId is required");
    }

    if (this._items.length === 0) {
      throw new Error("Item quantity must be greater than 0");
    }

    if (this._items.some((item) => item.quantity <= 0)) {
      throw new Error("Quantity must be greater than 0");
    }

    return true;
  }

  calculateTotal(): number {
    return this._items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  get total(): number {
    return this._total;
  }
}
