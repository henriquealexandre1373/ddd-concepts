import Customer from "./domain/entity/customer";
import Order from "./domain/agreggate/order";
import Address from "./domain/value-object/address";
import OrderItem from "./domain/entity/order-item";

let customer = new Customer("123", "Henrique");

const address = new Address("Rua dois", 3, "12345-678", "São Paulo");

customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "p1", "Item 1", 10, 1);
const item2 = new OrderItem("2", "p2", "Item 2", 15, 1);

const order = new Order("1", customer.id, [item1, item2]);
