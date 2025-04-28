import Order from "./order";
import OrderItem from "../entity/order-item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrow("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("1", "", []);
    }).toThrow("CustomerId is required");
  });

  it("should throw error when items is empty", () => {
    expect(() => {
      let order = new Order("1", "123", []);
    }).toThrow("Item quantity must be greater than 0");
  });

  it("should calculate total", () => {
    const item1 = new OrderItem("i1", "p1", "Item 1", 15, 2);
    const item2 = new OrderItem("i2", "p2", "Item 2", 10, 2);

    let order = new Order("1", "123", [item1, item2]);

    expect(order.total).toBe(50);
  });

  it("should throw error if the item quantity is less or equal 0", () => {
    expect(() => {
      const item1 = new OrderItem("i1", "p1", "Item 1", 15, 0);
    }).toThrow("Quantity must be greater than 0");
  });
});
