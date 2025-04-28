import { Sequelize } from "sequelize-typescript";
import ProductModel from "../database/sequelize/model/product.model";
import Product from "../../domain/entity/product";
import ProductRepository from "./product.repository";

describe("Product Repository Tests", () => {
  let sequelize: Sequelize;
  const productMock = {
    id: "p1",
    name: "Product 1",
    price: 100,
  };

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const productRepository = new ProductRepository();

    const product = new Product(
      productMock.id,
      productMock.name,
      productMock.price
    );

    await productRepository.create(product);

    const createdProduct = await ProductModel.findOne({
      where: { id: product.id },
    });

    expect(createdProduct.toJSON()).toStrictEqual(productMock);
  });

  it("should update a product", async () => {
    const productRepository = new ProductRepository();

    const product = new Product(
      productMock.id,
      productMock.name,
      productMock.price
    );

    await productRepository.create(product);
    const createdProduct = await ProductModel.findOne({
      where: { id: product.id },
    });
    expect(createdProduct.toJSON()).toStrictEqual(productMock);

    const nameToUpdate = "Other Product";
    const priceToUpdate = 200;
    product.changeName(nameToUpdate);
    product.changePrice(priceToUpdate);

    await productRepository.update(product);

    const updatedProduct = await ProductModel.findOne({
      where: { id: product.id },
    });

    expect(updatedProduct.toJSON()).toStrictEqual({
      id: productMock.id,
      name: nameToUpdate,
      price: priceToUpdate,
    });
  });

  it("should find a product", async () => {
    const productRepository = new ProductRepository();

    const product = new Product(
      productMock.id,
      productMock.name,
      productMock.price
    );

    await productRepository.create(product);
    const foundProductModel = await ProductModel.findOne({
      where: { id: product.id },
    });
    const foundProductRepository = await productRepository.find(product.id);

    expect(foundProductModel.toJSON()).toStrictEqual({
      id: foundProductRepository.id,
      name: foundProductRepository.name,
      price: foundProductRepository.price,
    });
  });

  it("should find all products", async () => {
    const productRepository = new ProductRepository();

    const product1 = new Product(
      productMock.id,
      productMock.name,
      productMock.price
    );
    await productRepository.create(product1);

    const product2 = new Product("p2", "Product 2", 200);
    await productRepository.create(product2);

    const foundProducts = await productRepository.findAll();
    const products = [product1, product2];

    expect(foundProducts).toEqual(products);
  });
});
