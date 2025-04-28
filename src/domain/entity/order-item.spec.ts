import OrderItem from "./order-item";

describe("Order Item unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let orderItem = new OrderItem("", "p1", "Order Item 1", 100, 1);
    }).toThrow("Id is required");
  });

  it("should throw error when produtId is empty", () => {
    expect(() => {
      let orderItem = new OrderItem("oi1", "", "Order Item 1", 100, 1);
    }).toThrow("ProductId is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let orderItem = new OrderItem("oi1", "p1", "", 100, 1);
    }).toThrow("Name is required");
  });

  it("should throw error when price is less than 0", () => {
    expect(() => {
      let orderItem = new OrderItem("oi1", "p1", "Order Item 1", 0, 1);
    }).toThrow("Price must be greater than 0");

    expect(() => {
      let orderItem = new OrderItem("oi1", "p1", "Order Item 1", -1, 1);
    }).toThrow("Price must be greater than 0");
  });

  it("should throw error when quantity is less than 0", () => {
    expect(() => {
      let orderItem = new OrderItem("oi1", "p1", "Order Item 1", 100, 0);
    }).toThrow("Quantity must be greater than 0");

    expect(() => {
      let orderItem = new OrderItem("oi1", "p1", "Order Item 1", 100, -1);
    }).toThrow("Quantity must be greater than 0");
  });
});
