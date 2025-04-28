import Address from "./address";

describe("Address Unit Tests", () => {
  it("should throw error when street is empty", () => {
    expect(() => {
      let address = new Address("", 1, "12345-678", "São Paulo");
    }).toThrow("Street is required");
  });

  it("should throw error when number is less than 0", () => {
    expect(() => {
      let address = new Address("Street 1", 0, "12345-678", "São Paulo");
    }).toThrow("Number is invalid");

    expect(() => {
      let address = new Address("Street 1", -1, "12345-678", "São Paulo");
    }).toThrow("Number is invalid");
  });

  it("should throw error when zipCode is empty", () => {
    expect(() => {
      let address = new Address("Street 1", 1, "", "São Paulo");
    }).toThrow("ZipCode is required");
  });
  it("should throw error when city is empty", () => {
    expect(() => {
      let address = new Address("Street 1", 1, "12345-678", "");
    }).toThrow("City is required");
  });
});
