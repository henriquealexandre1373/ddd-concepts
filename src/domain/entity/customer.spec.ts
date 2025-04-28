import Address from "../value-object/address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "Henrique");
    }).toThrow("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("1", "");
    }).toThrow("Name is required");
  });

  it("should change name", () => {
    const customer = new Customer("1", "Henrique");
    customer.changeName("John");
    expect(customer.name).toBe("John");
  });

  it("should activate customer", () => {
    const customer = new Customer("1", "Customer 1 ");
    const address = new Address("Street 1", 123, "12345-678", "São Paulo");

    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("should deactivate customer", () => {
    const customer = new Customer("1", "Customer 1 ");

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should throw error when address is undefined", () => {
    const customer = new Customer("1", "Customer 1 ");

    expect(() => {
      customer.activate();
    }).toThrow("Address is mandatory to activate a customer");
  });

  it("should add reward points", () => {
    const customer = new Customer("c1", "Customer 1");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
