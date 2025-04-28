import Product from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let product = new Product("", "Product 1", 100);
    }).toThrow("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let product = new Product("1", "", 100);
    }).toThrow("Name is required");
  });

  it("should throw error when price is less than 0", () => {
    expect(() => {
      let product = new Product("1", "Product 1", -1);
    }).toThrow("Price must be greater than 0");
  });

  it("should change name", () => {
    const product = new Product("123", "Name", 10);

    product.changeName("Changed Name");

    expect(product.name).toBe("Changed Name");
  });

  it("should change price", () => {
    const product = new Product("123", "Name", 10);

    product.changePrice(15);

    expect(product.price).toBe(15);
  });
});
