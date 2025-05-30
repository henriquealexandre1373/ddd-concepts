import Customer from "../entity/customer";
import Order from "../agreggate/order";
import Address from "../value-object/address";
import OrderItem from "../entity/order-item";
import OrderService from "./order.service";

describe("Order Service Unit Tests", () => {
  it("should place an order", () => {
    const customer = new Customer("c1", "Customer 1");
    const item1 = new OrderItem("i1", "p1", "Order Item 1", 100, 1);

    const order = OrderService.placeOrder(customer, [item1]);

    expect(customer.rewardPoints).toBe(50);
    expect(order.total).toBe(100);
  });

  it("should get total of all orders", () => {
    const item1 = new OrderItem("i1", "p1", "Item 1", 100, 1);
    const item2 = new OrderItem("i2", "p1", "Item 2", 150, 2);

    const order1 = new Order("o1", "c1", [item1]);
    const order2 = new Order("o2", "c1", [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(400);
  });
});
